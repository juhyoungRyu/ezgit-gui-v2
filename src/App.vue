<script setup lang="ts">
import Button from "primevue/button";
import Divider from "primevue/divider";
import ActionButton from "./components/ActionButton.vue";
import ActionDialog from "./components/ActionDialog.vue";
import type { DialogType } from "./interface";
import { reactive } from "vue";

const actionButtonList: any[] = [
  { id: 1, title: "Push", type: "push" },
  { id: 2, title: "Pull", type: "pull" },
  { id: 3, title: "Checkout", type: "checkout" },
];

const manageDialog = reactive<DialogType>({
  visiable: false,
  type: "",
  header: "",
});

const callDialog = (type: "push" | "pull" | "checkout", header: string) => {
  manageDialog.visiable = true;
  manageDialog.type = type;
  manageDialog.header = header;
};
</script>

<template>
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
        @click="callDialog(item.type, item.title)"
      />
    </section>
    <section class="footer">
      <Divider id="Divider" />
      <Button
        class="folder"
        label="please select your working directory"
        size="small"
        icon="pi pi-folder-open"
        plain
        text
        raised
      />
    </section>
  </div>
  <ActionDialog :config="manageDialog" />
</template>

<!-- modal 활성화 시 밀리는 문제 : box-sizing:calc(0) 해결 -->
<style>
* {
  box-sizing: calc(0);
}

body {
  font-family: Poppins, sans-serif;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
