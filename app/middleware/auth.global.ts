export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const isLoginPage = to.path.startsWith('/login')

  if (!user.value && !isLoginPage) return navigateTo('/login')
  if (user.value && isLoginPage) return navigateTo('/')
})
