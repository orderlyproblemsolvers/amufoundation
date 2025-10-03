// middleware/admin.ts
import { onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') {
    return
  }

  if (!to.path.startsWith('/admin')) {
    return
  }

  if (process.client) {
    const { $auth } = useNuxtApp()
    
    // Check if user is already available (cached)
    if ($auth.currentUser) {
      return // User is authenticated
    }
    
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve(navigateTo('/admin/login'))
      }, 1000) // Reduced timeout

      const unsubscribe = onAuthStateChanged($auth, (user) => {
        clearTimeout(timeout)
        unsubscribe()
        
        if (!user) {
          resolve(navigateTo('/admin/login'))
        } else {
          resolve()
        }
      })
    })
  }
})