<template>
  <div id="app">
    <app-header></app-header>
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Sansita Swashed', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 100px;
}
</style>
