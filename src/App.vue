<template>
  <div id="nav" class="w-11/12 mx-auto py-4 flex justify-between items-center">
    <div class="flex justify-between items-center">
      <img alt="Vue logo" src="./assets/logo.png" class="w-12 h-10" />
      <h1 class="font-semibold text-2xl">Post App</h1>
    </div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/posts">All Posts</router-link>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "./store";
import { TAction } from "./types";
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch(TAction.FETCH);
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
