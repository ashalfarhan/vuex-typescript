<template>
  <img alt="Vue logo" src="./assets/logo.png" class="w-32 mx-auto" />
  <Posts />
  <Post />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/store";
import { TAction } from "@/types";
import Posts from "@/components/Posts.vue";
import Post from "@/components/Post.vue";

export default defineComponent({
  name: "App",
  components: {
    Posts,
    Post,
  },
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
  margin-top: 0.5em;
}
</style>
