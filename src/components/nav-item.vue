<template>
  <q-item  clickable :active="navItem.name === 'hello'" v-ripple :to="navItem.path">
    <q-item-section avatar>
      <q-icon :name="navItem.icon"/>
    </q-item-section>
    <q-item-section class="text-h6">{{ navItem.name }}</q-item-section>
  </q-item>
</template>
<script>
export default {
    props:["navItem"]
};
</script>
<style>
</style>
