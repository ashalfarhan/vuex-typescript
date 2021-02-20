<template>
  <div class="about">
    <h1 class="text-4xl text-center capitalize mb-4">
      Here's the submitted posts
    </h1>
    <AllPosts />
  </div>
</template>

<script lang="ts">
import AllPosts from "@/components/Posts.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Add posts",
  components: {
    AllPosts,
  },
});
</script>
