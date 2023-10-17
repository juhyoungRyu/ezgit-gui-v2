<script setup lang="ts">
import Button from "primevue/button";
import Divider from "primevue/divider";
import ActionButton from "./components/ActionButton.vue";
import ActionDialog from "./components/ActionDialog.vue";
import Push from "./components/Popup/Push.vue";
import Pull from "./components/Popup/Pull.vue";
import type { DialogType } from "../interface";
import { reactive, watch } from "vue";
import { ipcRenderer } from "electron";

const actionButtonList: DialogType[] = [
  { id: 1, title: "Push", popup: Push },
  { id: 2, title: "Pull", popup: Pull },
  { id: 3, title: "Checkout", popup: "checkout" },
];

const directoryConfig = reactive({
  path: "",
  icon: "pi-folder",
  loading: false,
});

watch(
  () => directoryConfig.path,
  () => {
    if (directoryConfig.path === "") {
      directoryConfig.icon = "pi-folder";
    } else {
      directoryConfig.icon = "pi-folder-open";
    }
  }
);

async function callSelectPath() {
  directoryConfig.loading = true;

  ipcRenderer.send("call:openFile");

  const filePath: string = await new Promise((resolve, rejective) => {
    ipcRenderer.once("get:openFile", (_, arg) => {
      if (arg !== true) {
        resolve(arg);
      } else {
        rejective("");
      }
    });
  });

  if (filePath !== "") {
    directoryConfig.path = filePath;
  }

  directoryConfig.loading = false;
}

const dialogConfig = reactive<DialogType>({
  visible: false,
  popup: "",
  title: "",
});

const callDialog = (item: DialogType) => {
  dialogConfig.visible = true;
  dialogConfig.popup = item.popup;
  dialogConfig.title = item.title;
};
</script>

<template>
  <ActionDialog :config="dialogConfig" />

  <div class="container">
    <section class="header">
      <p class="title">EzGit</p>
      <p class="subTitle">GUI to help you use Git</p>
      <Divider id="Divider" />
    </section>

    <section class="main">
      <ActionButton
        v-for="item in actionButtonList"
        :key="item.id"
        :title="item.title"
        :disabled="directoryConfig.path === ''"
        @click="callDialog(item)"
      />
    </section>

    <section class="footer">
      <Divider id="Divider" />
      <Button
        class="folder"
        :loading="directoryConfig.loading"
        :label="
          directoryConfig.path === ''
            ? 'please select your working directory'
            : directoryConfig.path
        "
        size="small"
        :icon="'pi ' + directoryConfig.icon"
        plain
        text
        raised
        @click="callSelectPath"
      />
    </section>
  </div>
</template>

<!-- modal 활성화 시 밀리는 문제 : box-sizing: content-box 해결 -->
<style>
body {
  font-family: Poppins, sans-serif;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}

.container {
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 38px;
  font-weight: 600;
  color: #467e46;
  margin: 0;
}

.subTitle {
  font-size: 13px;
  margin: 0;
}

.main {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.footer {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.folder {
  font-size: 10px;
}
</style>
../../types/interface