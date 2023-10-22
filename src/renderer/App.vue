<script setup lang="ts">
import Sidebar from "./Layouts/Sidebar.vue";
import Main from "./Layouts/Main.vue";
import Divider from "primevue/divider";
import _ from "lodash";
</script>

<template>
  <div class="ezgit">
    <Sidebar />
    <Divider layout="vertical" />
    <Main />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.ezgit {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
}
</style>
