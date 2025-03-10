<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from "vue";

let message = ref("hi test");

    setTimeout(()=>{
      message.value = "I have been changed";
    },2000);

</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p><input type="text" v-model="message"/></p>
  </main>
</template>
