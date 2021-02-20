<template>
  <div class="hello">
    <h1>{{}}</h1>
    <button @click="increment">Increment</button>
    <!-- <button @click="decrement">Decrement</button> -->
  </div>
</template>

<script lang="ts">
import { TMutation } from "@/types";
import { defineComponent, ref } from "vue";
import { useStore } from "../store";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const count = ref(store.state);
    const increment = (): void => {
      store.commit(TMutation.ADD);
    };
    // const decrement = (): void => {
    //   store.commit("decrement");
    // };
    return {
      count,
      increment,
      // decrement,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
