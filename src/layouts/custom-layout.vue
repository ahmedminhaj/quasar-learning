<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-blue-grey-9">
      <q-toolbar>
        <q-btn flat @click="drawerOpen = !drawerOpen" round dense icon="menu"/>
        <q-toolbar-title>TestGround</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="300"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <nav-item v-for="(menuItem, index) in drawerMenu" :key="index" :navItem="menuItem"></nav-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import navItem from "components/nav-item";
export default {
  components: {
    navItem
  },
  data() {
    return {
      drawerOpen: false,
      miniState: true,
      drawerMenu: [
        { name: "Task List", icon: "work", path: "task" },
        { name: "Blog List", icon: "edit", path: "blog" },
        { name: "Vue Home", icon: "home", path: "hello" },
        { name: "Test View", icon: "code", path: "test" },
        { name: "Help", icon: "help", path: "idx" },
        { name: "Contact", icon: "phone", path: "idx" },
        { name: "Animation", icon: "movie", path: "anime" }
      ]
    };
  }
};
</script>

<style>
</style>
