<script setup>
import { useStorage } from '@/composables/useStorage';

let name = useStorage('name', 'habib');
let age = useStorage('age', 26);
</script>
<template>
  <div>
    <p>
      What is your name? <input type="text" v-model="name">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </div>
</template>
