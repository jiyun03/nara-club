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
  <div>
    <h1>로그인</h1>
    <button @click="loginWithGoogle">Google로 로그인</button>
  </div>
</template>
