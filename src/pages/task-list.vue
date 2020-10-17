<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="card-container">
        <h3>Todo List</h3>

        <task-view
          v-for="(task, index) in taskList"
          :key="index"
          :task="task"
          @delete="deleteTask(task)"
          @edit="showEditor(task.id)"
        />

        <task-editor
          :visible="editorVisibility"
          :value="selectedTask"
          @cancel="closeEditor"
          @input="updateTask($event)"
        ></task-editor>

        <q-btn
          @click="showEditor()"
          class="q-mt-md q-mr-sm bg-blue-grey-9 text-grey-2"
          icon="add"
          label="add todo"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import taskView from "components/task";
import taskEditor from "components/task-editor";
import utlCloneDeep from "lodash/cloneDeep";
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  components: {
    taskView,
    taskEditor
  },
  data() {
    return {};
  },
  computed: {
    selectedTask() {
      return this.$store.getters["getSelectedId"];
    },
    editorVisibility() {
      return this.$store.state.taskStore.visibleEditor;
    },
    taskList() {
      return this.$store.state.taskStore.taskList;
    }
  },
  methods: {
    showEditor(id$) {
      this.$store.commit("showEditor", id$);
    },
    closeEditor() {
      this.$store.commit("closeEditor");
    },
    deleteTask(task$) {
      console.log(task$.id);
      this.$store.commit("deleteTask", task$);
    },
    updateTask(task$) {
      console.log(task$.id);
      this.$store.commit("updateTask", task$);
    }
  }
};
</script>

<style>
.card-container {
  width: 700px;
}
</style>