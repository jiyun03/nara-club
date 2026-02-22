<script setup lang="ts">
definePageMeta({ layout: 'login' })

const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      const email = user.value.email ?? ''
      if (!email.endsWith('@naraspace.com')) {
        useSupabaseClient().auth.signOut()
        return navigateTo('/login')
      }
      return navigateTo('/')
    }
  },
  { immediate: true },
)
</script>

<template>
  <Button class="w-full" variant="outline" disabled>로그인 처리 중...</Button>
</template>
