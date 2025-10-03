// middleware/admin.ts
import { onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  // Skip authentication check for login page
  if (to.path === '/admin/login') {
    return
  }

  // Only check authentication for admin routes
  if (!to.path.startsWith('/admin')) {
    return
  }

  // Only run on client side (Firebase Auth is client-side only)
  if (process.client) {
    const { $auth } = useNuxtApp()
    
    return new Promise((resolve) => {
      // Set a timeout to prevent indefinite waiting
      const timeout = setTimeout(() => {
        resolve(navigateTo('/admin/login'))
      }, 5000)

      const unsubscribe = onAuthStateChanged($auth, (user) => {
        clearTimeout(timeout)
        unsubscribe() // Clean up the listener
        
        if (!user) {
          // User is not authenticated, redirect to login
          resolve(navigateTo('/admin/login'))
        } else {
          // User is authenticated, allow access
          resolve()
        }
      })
    })
  }
})