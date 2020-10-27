export default {
  state: {
    visibleEditor: false,
    taskList: [
      { title: "JavaScript", id: 0, dueDate: "24 Sep 2020"},
      { title: "VueJS", id: 1, dueDate: "26 Sep 2020"},
      { title: "Quasar", id: 2, dueDate: "29 Sep 2020"},
      { title: "Dart", id: 3, dueDate: "12 Oct 2020"}
    ],
    selectedId: 0
  },
  getters: {
    // mapTaskList(state) {
    //   var result = {};
    //   for (var i = 0; i < state.taskList.length; i++) {
    //     result[state.taskList[i].id] = state.taskList[i];
    //   }
    //   return result
    // }
    getSelectedId(state) {
      return state.taskList[state.selectedId]
    }
  },
  mutations: {
    showEditor(state, id) {
      state.selectedId = id 
      state.visibleEditor = true
      console.log(state.selectedId)
    },
    closeEditor(state) {
      state.visibleEditor = false
    },
    deleteTask(state, task) {
      console.log(task.id);
      const { [task.id]: remove, ...rest } = state.taskList;
      console.log(rest);
      state.taskList = rest;
    },
    updateTask(state, task) {
      console.log(task.id)
      if (task.id != null) {
        state.taskList[task.id] = task;
        state.visibleEditor = false
      } else { 
        var lastItem = Object.keys(state.taskList).pop();
        console.log(lastItem)
        var newId = (lastItem === undefined)? 0 : state.taskList[lastItem].id + 1;
        console.log(newId);
        state.taskList[newId] = {
          title: task.title,
          id: (newId === undefined) ? 0 : newId,
          dueDate: task.dueDate,
          delete: false
        };
        state.visibleEditor = false
      }
    }
  }
}