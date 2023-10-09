<script setup lang="ts">
import Button from "primevue/button";

defineProps<{
  title?: string;
}>();
</script>

<template>
  <Button :label="title ? title : 'Untitled Button'" text raised />
</template>

<style scoped>
Button {
  margin-bottom: 15px;
  width: 80%;
  height: 55px;
  font-size: 15px;
  color: #467e46;
}

Button:hover {
  color: white;
  background-color: #467e46;
}
</style>
