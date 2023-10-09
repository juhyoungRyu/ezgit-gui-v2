<script setup lang="ts">
import Dialog from "primevue/dialog";
import Push from "./Popup/Push.vue";
import type { DialogType } from "../interface";

const props = defineProps<{
  config: DialogType;
}>();

function selectPopup() {
  if (props.config.type === "push") {
    return Push;
  }
}

const Popup = selectPopup();
</script>

<template>
  <Dialog
    v-model:visible="props.config.visiable"
    :header="props.config.header"
    :draggable="false"
    :style="{ width: '80%' }"
    modal
  >
    <Popup />
  </Dialog>
</template>

<style scoped></style>
