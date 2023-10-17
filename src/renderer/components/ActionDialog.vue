<script setup lang="ts">
import Dialog from "primevue/dialog";
import type { DialogType } from "../../interface";

const props = defineProps<{
  config: DialogType;
  cwd: string;
}>();
</script>

<template>
  <Dialog
    v-model:visible="props.config.visible"
    :header="props.config.title"
    :draggable="false"
    :style="{ width: '90%', boxSizing: 'content-box' }"
    modal
  >
    <component :is="props.config.popup" :cwd="props.cwd" />
  </Dialog>
</template>

<style scoped></style>
../../../types/interface