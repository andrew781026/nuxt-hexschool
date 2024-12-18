<script setup lang="ts">

</script>

<template>
  <h2>1.首頁(CTA)</h2>
  <div class="flex flex-col m-2 p-4 gap-1 border rounded bg-pink-300">
    <NuxtLink to="/" class="link link-primary">
      首頁
    </NuxtLink>
    <NuxtLink to="/login" class="link link-primary">
      登入
    </NuxtLink>
    <NuxtLink to="/signup" class="link link-primary">
      註冊
    </NuxtLink>
    <NuxtLink to="/hotel/list" class="link link-primary">
      客房列表
    </NuxtLink>
    <NuxtLink to="/hotel/detail" class="link link-primary">
      客房詳
    </NuxtLink>
    <NuxtLink to="/reserve" class="link link-primary">
      預約
    </NuxtLink>
    <NuxtLink to="/reserve/success" class="link link-primary">
      預約成功
    </NuxtLink>
    <NuxtLink to="/reserve/failed" class="link link-primary">
      預約失敗
    </NuxtLink>
    <NuxtLink to="/user/edit" class="link link-primary">
      會員 - 修改資料
    </NuxtLink>
    <NuxtLink to="/user/order" class="link link-primary">
      會員 - 訂單查詢
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>
