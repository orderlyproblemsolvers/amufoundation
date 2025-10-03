// middleware/admin.ts
import { onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return
  if (!to.path.startsWith('/admin')) return

  if (process.client) {
    const { $auth } = useNuxtApp()

    // If user is already available, allow
    if ($auth.currentUser) return

    // Wait for Firebase to resolve
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
