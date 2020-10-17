<template>
  <q-card class="my-card bg-grey-2 text-blue-grey-9 q-mt-md q-mr-sm q-px-md">
    <q-card-section>
      <div class="text-h6">{{ blog.title }}</div>
      <div class="text-subtitle2">{{ blog.author }}</div>
    </q-card-section>
    <q-card-section>{{ blog.details }}</q-card-section>
    <q-card-actions>
      <q-chip
        color="blue-grey-9"
        text-color="grey-2"
        v-for="(tag, tagIdx) in blog.tagList"
        :key="tagIdx"
      >{{ tag }}</q-chip>
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
    props:["blog"]
};
</script>
