<script setup lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import Divider from "primevue/divider";
import Button from "primevue/button";
import { breadcrumb } from "../Configs/items";
import { ref } from "vue";
import _ from "lodash";

const items = ref(_.cloneDeep(breadcrumb.items));
</script>

<template>
  <div class="main">
    <section class="router">
      <Breadcrumb :home="breadcrumb.home" :model="items">
        <template #item="{ item }">
          <a :class="item.class">
            <span :class="item.icon"></span>
          </a>
        </template>
      </Breadcrumb>
    </section>
    <div style="width: 95%">
      <Divider />
    </div>
    <section class="myBody"></section>
    <div style="width: 95%">
      <Divider />
    </div>
    <section class="footer">
      <Button
        class="folder"
        label="please select your working directory"
        size="small"
        icon="pi pi-folder"
        plain
        text
        raised
      />
    </section>
  </div>
</template>

<style scoped>
.main {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.router {
  width: 100%;
  height: 5%;
}

.p-breadcrumb {
  border: none;
}

.myBody {
  width: 100%;
  height: 85%;
}

.footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
