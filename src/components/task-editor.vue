<template>
  <q-dialog :value="visible" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Todo</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="model.title" autofocus/>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="model.dueDate" autofocus/>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn @click="$emit('cancel')" flat label="Cancel" v-close-popup/>
        <q-btn @click="$emit('input', model)" flat label="Save" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import utlCloneDeep from "lodash/cloneDeep";

export default {
  props: ["visible", "value"],
  watch: {
    visible: {
      handler: function(new$, old$) {
        if (this.value === undefined) {
          this.model = {};
        } else {
          this.model = utlCloneDeep(this.value);
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      model: utlCloneDeep(this.value)
    };
  }
};
</script>

<style>
</style>