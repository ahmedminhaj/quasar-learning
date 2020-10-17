<template>
<q-dialog :value="prompt" persistent>
    <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Todo</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense :value="todo.title" @input="todo.title = $event" autofocus/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense :value="todo.dueDate" @input="todo.dueDate = $event" autofocus/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn @click="$emit('close-editor')" flat label="Cancel" v-close-popup />
          <q-btn @click="$emit('save-todo', todo )" flat label="Save" v-close-popup />
        </q-card-actions>
    </q-card>
</q-dialog>
</template>

<script>
export default {
    props:['prompt', 'task'],
    data(){
        return{
            todo: this.task
        }
    },
}
</script>

<style>

</style>