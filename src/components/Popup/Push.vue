<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { reactive, ref } from "vue";

function getUniqeKey() {
  return `${Math.floor(Math.random() * 10000)}`;
}

const state = reactive({
  commitMessageInvalid: "p-invalid",
});

const changedItemList = ref([
  { name: "source1.vue", key: getUniqeKey() },
  { name: "source2.vue", key: getUniqeKey() },
  { name: "source3.vue", key: getUniqeKey() },
  { name: "source4.vue", key: getUniqeKey() },
]);

const commitTargetList = ref([]);

function execCommit() {
  console.log(`commitTargetList : ${commitTargetList.value}`);
  console.log(changedItemList.value);
}
function execPush() {}
</script>

<template>
  <div class="pushPopup">
    <div class="targetList">
      <div
        v-for="target in changedItemList"
        :key="target.key"
        class="flex align-items-center"
      >
        <Checkbox
          v-model="commitTargetList"
          :inputId="target.key"
          name="target"
          :value="target.name"
        />
        <label :for="target.key" style="margin-left: 8px; font-size: 14px">{{
          target.name
        }}</label>
      </div>
    </div>
    <span class="p-input-icon-left commitMessageInput" style="height: 70px">
      <i class="pi pi-envelope" />
      <InputText
        size="small"
        placeholder="Search"
        class="commitMessageInput"
        :class="state.commitMessageInvalid"
      />
    </span>
    <div class="btn">
      <Button
        icon="pi pi-send"
        size="small"
        severity="warning"
        rounded
        raised
        text
        @click="execCommit"
      />
      <Button
        style="margin-left: 10px"
        icon="pi pi-upload"
        size="small"
        severity="success"
        rounded
        raised
        text
        @click="execPush"
      />
    </div>
  </div>
</template>

<style scoped>
.pushPopup {
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.targetList {
  width: 100%;
  height: 100px;
  overflow-y: scroll;
}

.commitMessageInput {
  display: flex;
  align-items: center;
  width: 100%;
}

.btn {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
