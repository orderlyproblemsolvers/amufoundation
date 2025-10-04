// middleware/admin.ts
import { onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return
  if (!to.path.startsWith('/admin')) return

  // Only run on client side
  if (process.client) {
    const { $auth } = useNuxtApp()

    // Wait for Firebase to resolve before allowing navigation
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged($auth, (user) => {
        unsubscribe()
        if (!user) {
          resolve(navigateTo('/admin/login', { replace: true }))
        } else {
          resolve()
        }
      })
    })
  }
})