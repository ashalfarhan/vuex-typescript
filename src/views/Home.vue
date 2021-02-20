<template>
  <div class="home">
    <Post />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post,
  },
};
</script>
