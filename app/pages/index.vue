<script setup lang="ts">
const supabase = useSupabase()

const logout = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div>
    <h1>메인 페이지</h1>
    <button @click="logout">로그아웃</button>
  </div>
</template>
