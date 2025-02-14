<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: ""
  }
});

import { inject } from 'vue';
const goToPrev = inject('goToPrev');
const is_client = ref(false);

onMounted(() => {
  is_client.value = true;
});
</script>

<template lang="pug">
.header-row(v-if="is_client")
  a.back-button(@click='goToPrev')
    i.fas.fa-arrow-left
  h1.title {{ $t(`title.${title}`) }}
  Template1UxLanguageBar
</template>

<style scoped>
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid #f3eeee;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 2px 2px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}

.title {
  flex-grow: 1; /* Ensures the title takes up available space and centers itself */
  text-align: center;
  font-size: 24px;
  margin: 0;
  font-weight: 600;
}
</style>