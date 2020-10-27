<template>
  <q-page>
    <div class="flex justify-center">
      <div class="editor-container">
        <h3>New Blog</h3>
        <blog-form :value="newBlog" @input="publishBlog($event)"></blog-form>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import blogForm from "components/blog-form.vue";

export default Vue.extend({
  components:{ blogForm },
  data(){
    return {
      focusKey: false
    }
  },
  computed:{
    newBlog(){
      return undefined
    }
  },
  methods: {
    processInputFill() {
      this.focusKey != this.focusKey;
    },
    publishBlog(blog$) {
      this.$store.dispatch("publishNewBlog", blog$);
      this.$router.push({ name: "blog" });
    }
  } 
})
</script>

<style>
.editor-container {
  width: 800px;
}

.tag-input {
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 5px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #37474f;
  color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  line-height: 50px;
  background: none;
}
</style>
