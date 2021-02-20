<template>
  <div>
    <h1>Post App</h1>
    <div>
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { TAction } from "@/types";

export default defineComponent({
  name: "Posts",
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters.getAll);
    return {
      posts,
    };
  },
});
</script>

<style></style>
