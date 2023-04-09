<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import Academia from './components/Academia.vue';
import Experience from './components/Experience.vue';
import Hero from './components/Hero.vue'
</script>

<template>
  <html data-theme="dracula">
  <header class="sticky top-0 z-50">
    <NavBar></NavBar>
  </header>

  <body>
    <div class="lg:p-10 p-2">
      <Hero></Hero>
      <div class="divider py-6" id="AboutMe"></div>
      <HelloWorld />
      <div class="divider py-6" id="Academia"></div>
      <Academia></Academia>
      <div class="divider py-6" id="Experience"></div>
      <Experience></Experience>
    </div>
  </body>
  <footer></footer>

  </html>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>
<style scoped></style>
