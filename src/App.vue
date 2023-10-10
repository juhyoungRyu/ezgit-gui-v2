<script setup lang="ts">
import Button from "primevue/button";
import Divider from "primevue/divider";
import ActionButton from "./components/ActionButton.vue";
import ActionDialog from "./components/ActionDialog.vue";
import Push from "./components/Popup/Push.vue";
import Pull from "./components/Popup/Pull.vue";
import { sendSelectDir } from "./api/file-api";
import type { DialogType } from "./interface";
import { reactive } from "vue";

const actionButtonList: any[] = [
  { id: 1, title: "Push", popup: Push },
  { id: 2, title: "Pull", popup: Pull },
  { id: 3, title: "Checkout", popup: "checkout" },
];

const directoryConfig = reactive({
  path: "",
  icon: "pi-folder",
  loading: false,
});

async function callSelectPath() {
  const result = await sendSelectDir(directoryConfig.loading);
}


const dialogConfig = reactive<DialogType>({
  visible: false,
  popup: null,
  header: "",
});

const callDialog = (popup: any, header: string) => {
  dialogConfig.visible = true;
  dialogConfig.popup = popup;
  dialogConfig.header = header;
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
        @click="callDialog(item.popup, item.title)"
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
