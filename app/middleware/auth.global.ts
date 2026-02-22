export default defineNuxtRouteMiddleware(async (to) => {
  const { $supabase } = useNuxtApp()
  const {
    data: { session },
  } = await $supabase.auth.getSession()

  const isLoginPage = to.path === '/login'

  // 로그인 안 된 상태에서 login 페이지 아닌 곳 접근, login으로
  if (!session && !isLoginPage) {
    return navigateTo('/login')
  }

  // 로그인 된 상태에서 login 페이지 접근, index로
  if (session && isLoginPage) {
    return navigateTo('/')
  }
})
