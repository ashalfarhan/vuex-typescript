<template>
  <div>
    <h1 class="text-4xl text-center">Add your post here</h1>
    <div>
      <form
        class="max-w-lg mx-auto w-full flex flex-col space-y-4"
        @submit.prevent="handleSubmit"
      >
        <div class="flex flex-col">
          <label class="py-2 text-xl">Title:</label>
          <input
            type="text"
            v-model="userInput.title"
            class="p-2 focus:outline-none border-b-2 border-blue-300"
          />
        </div>
        <div class="flex flex-col">
          <label class="py-2 text-xl">Body:</label>
          <textarea
            type="textarea"
            v-model="userInput.body"
            class="px-2 pt-2 pb-12 focus:outline-none border-2 border-blue-300"
          />
        </div>
        <input type="submit" value="Submit" class="p-3 focus:outline-none" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { TAction } from "@/types";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Form",
  setup() {
    const store = useStore();
    const userInput = reactive({
      title: "",
      body: "",
    });

    const handleSubmit = (e: HTMLFormElement) => {
      store.dispatch(TAction.ADD, {
        title: userInput.title,
        body: userInput.body,
      });
      console.log(userInput.title);
      userInput.title = "";
      userInput.body = "";
    };
    return {
      userInput,
      handleSubmit,
    };
  },
});
</script>
