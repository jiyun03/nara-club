<script setup lang="ts">
definePageMeta({
  layout: 'login',
})

const supabase = useSupabase()

onMounted(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    const email = session.user.email ?? ''
    if (!email.endsWith('@naraspace.com')) {
      await supabase.auth.signOut()
      return navigateTo('/login')
    }
    return navigateTo('/')
  }

  navigateTo('/login')
})
</script>

<template>
  <Button class="w-full" variant="outline" disabled>로그인 처리 중...</Button>
</template>
