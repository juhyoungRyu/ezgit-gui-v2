i
<script setup lang="ts">
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Skeleton from "primevue/skeleton";
import { ipcRenderer } from "electron";
import { reactive, ref } from "vue";

const props = defineProps<{
  cwd: string;
}>();

function getUniqeKey() {
  return `${Math.floor(Math.random() * 10000)}`;
}

const state = reactive({
  commitMessageInvalid: "p-invalid",
  commitMessage: "",
});

const changedItemList = ref(<{ name: string; key: string }[]>[]);

const commitTargetList = ref([]);

function refreshChangedItemList() {
  changedItemList.value = [];
  commitTargetList.value = [];

  ipcRenderer.send("call:git-status", { cwd: props.cwd });

  ipcRenderer.once("get:git-status", (_event, _arg: string[]) => {
    _arg.forEach((file) => {
      changedItemList.value.push({
        name: file,
        key: getUniqeKey(),
      });
    });
  });
}

function execCommit() {
  console.log(commitTargetList.value);
  console.log(state.commitMessage);
}

function execPush() {}
</script>

<template>
  <div class="pushPopup">
    <div class="targetList" v-if="changedItemList.length > 0">
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
    <div v-else height="30px" class="skeleton">
      <Skeleton size="2rem" class="mr-2" />
      <Skeleton height="2rem" width="15rem" class="mb-2" />
    </div>
    <span class="p-input-icon-left commitMessageInput" style="height: 70px">
      <i class="pi pi-envelope" />
      <InputText
        v-model="state.commitMessage"
        size="small"
        placeholder="write your commit message"
        class="commitMessageInput"
        :class="state.commitMessageInvalid"
      />
    </span>
    <div class="btnCon">
      <section class="btnFront">
        <Button
          icon="pi pi-refresh"
          size="small"
          severity="help"
          rounded
          raised
          text
          @click="refreshChangedItemList"
        />
      </section>
      <section class="btnBack">
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
      </section>
    </div>
  </div>
</template>

<style scoped>
.pushPopup {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.targetList {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  overflow-x: scroll;
}

.commitMessageInput {
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 100%;
}

.btnCon {
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
}

.btnFront {
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}

.btnBack {
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}

.refreshBtn {
  margin-top: 10px;
  margin-left: 10px;
  width: 10px;
  height: 33px;
}

.skeleton {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
</style>
