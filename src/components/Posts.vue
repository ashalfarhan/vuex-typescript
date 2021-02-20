<template>
  <div class="container mx-auto">
    <div class="flex flex-col space-y-4 text-left">
      <div v-for="post in posts" :key="post.id">
        <h3 class="font-semibold text-2xl">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

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
