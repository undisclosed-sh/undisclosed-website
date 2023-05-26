import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'
import firebase_app from '@/firebase/config'

const auth = getAuth(firebase_app)

export const AuthContext = createContext<AuthContextProps>({
  user: null,
})

type AuthContextProps = {
  user: null | User
}

export const useAuthContext = () => useContext(AuthContext)

type Props = {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<null | User>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
