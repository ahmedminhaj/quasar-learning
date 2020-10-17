<template>
  <div>
    <q-input
      v-model="model.title"
      filled
      clearable
      color="blue-grey-9"
      class="q-ma-md"
      label="Title"
      :placeholder="'New Tech Update'"
    />
    <q-input
      v-model="model.author"
      filled
      clearable
      color="blue-grey-9"
      class="q-ma-md"
      label="Author"
      :placeholder="'Jabbar Alee'"
    />

    <tag-input v-model="model.tag_list" :allTag="allTag"></tag-input>
    <q-input
      v-model="model.details"
      filled
      clearable
      type="textarea"
      color="blue-grey-9"
      class="q-ma-md"
      label="Details"
      :placeholder="'Update details'"
    />
    <q-btn
      class="q-ma-md bg-blue-grey-9 text-grey-2"
      label="publish"
      @click="$emit('input', model)"
    />
  </div>
</template>

<script>
import utlCloneDeep from "lodash/cloneDeep";
import tagInput from "components/tag-input";

export default {
  props: ["value"],
  components:{tagInput},
  watch: {
    $route: {
      handler: function(to$, from$) {
        if (to$.name === "blog-editor") {
          this.allTag = utlCloneDeep(this.listOfTag);
          if (this.value === undefined) {
            this.initModel();
          } else {
            this.model = utlCloneDeep(this.value);
          }
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      model: {},
      allTag: [],
    };
  },
  computed: {
    listOfTag() {
      return this.$store.state.blogStore.tagList;
    }
  },
  methods: {
    initModel() {
      this.model = {
        title: "",
        author: "",
        details: "",
        tag_list: []
      };
    },
  }
};
</script>
