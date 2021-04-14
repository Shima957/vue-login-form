<template>
  <div class="nav">
    <router-link to="/">ホーム</router-link> |
    <router-link to="/user">ユーザー</router-link>
  </div>
  <router-view/>
</template>

<script>

</script>

<style>
.nav{
  display: flex;
  justify-content: center;
}
</style>
