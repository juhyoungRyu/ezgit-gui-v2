<script setup lang="ts">
import Avatar from "primevue/avatar";
import Divider from "primevue/divider";
import { sideBarItem } from "../Configs/items";
import ActionButton from "../Actions/ActionButton.vue";
</script>

<template>
  <div class="sidebar">
    <section class="header">
      <p>EzGit</p>
      <p>Make using Git easier</p>
    </section>
    <Divider />
    <section class="main">
      <ActionButton v-for="item in sideBarItem" :title="item" />
    </section>
    <Divider />
    <section class="footer">
      <Avatar icon="pi pi-user" class="mr-2 avatar" shape="circle" />
      <p>Juhyoung Ryu</p>
    </section>
  </div>
</template>

<style scoped>
.sidebar {
  width: 20%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main {
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.avatar {
  margin-right: 15px;
}

p:first-child {
  font-size: 45px;
  font-weight: 600;
}

p {
  margin: 0;
  font-size: 15px;
}
</style>
