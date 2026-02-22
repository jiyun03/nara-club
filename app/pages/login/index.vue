<script setup lang="ts">
definePageMeta({
  layout: 'login',
})

const supabase = useSupabase()

const loginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/login/callback`,
    },
  })
  if (error) console.error(error)
}
</script>

<template>
  <Button class="w-full" variant="outline" @click="loginWithGoogle">Google 로그인</Button>
</template>
