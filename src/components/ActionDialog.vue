<script setup lang="ts">
import Dialog from "primevue/dialog";
import type { DialogType } from "../interface";

const props = defineProps<{
  config: DialogType;
}>();
</script>

<template>
  <Dialog
    v-model:visible="props.config.visible"
    :header="props.config.header"
    :draggable="false"
    :style="{ width: '90%', boxSizing: 'content-box' }"
    modal
  >
    <component :is="props.config.popup" />
  </Dialog>
</template>

<style scoped></style>
