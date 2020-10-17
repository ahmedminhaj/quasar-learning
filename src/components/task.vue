<template>
  <q-card class="row my-card bg-grey-2 text-blue-grey-9 q-mt-md q-mr-sm q-px-md">
    <q-card-section class="col">
      <div class="text-h6">{{ task.title }}</div>
      <div class="text-subtitle2">{{ task.dueDate }}</div>
    </q-card-section>
    <q-card-actions class="col" align="right">
      <q-btn @click="editTodo" flat round color="teal" icon="edit"/>
      <q-btn @click="deleteTodo" flat round color="red-10" icon="delete"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import taskEditor from "components/task-editor";
import utlCloneDeep from "lodash/cloneDeep";

export default {
  props: ["task"],
  components: {
    taskEditor
  },
  data() {
    return {};
  },
  methods: {
    deleteTodo: function() {
      this.$emit("delete");
    },
    editTodo: function() {
      this.$emit("edit");
    }
  }
};
</script>

<style scoped>
</style>