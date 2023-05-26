import { Analytics, getAnalytics, isSupported } from 'firebase/analytics'
import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

let analytics: Analytics | null = null

async function getAnalyticsInstance() {
  if (analytics) {
    return analytics
  } else if (await isSupported()) {
    analytics = getAnalytics(firebase_app)
    return analytics
  } else {
    return null
  }
}

// TODO: Test this
// getAnalyticsInstance()

export { getAnalyticsInstance }

export default firebase_app
