export default defineNuxtRouteMiddleware(async (to) => {
  // Only check authentication for admin routes
  if (!to.path.startsWith('/admin') || to.path === '/admin/login') {
    return
  }
  
  const supabase = useSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return navigateTo('/admin/login')
  }
})