<template>
  <div>
    <h1>Add your post here</h1>
    <div>
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Body:</label>
          <input type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",
});
</script>
