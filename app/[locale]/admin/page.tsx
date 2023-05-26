'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@contexts'

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user === null) router.push('/')
  }, [router, user])

  return <h1>Only logged in users can view this page</h1>
}
