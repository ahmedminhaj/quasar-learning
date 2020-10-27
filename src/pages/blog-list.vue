
<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="blog-container">
        <h3>Blog List</h3>

        <q-tabs dense align="left" class="bg-blue-grey-9 text-grey-1 shadow-2 q-mt-md q-mr-sm">
          <q-tab v-for="(tag, index) in listOfTag" :key="index" @click="tagFilter(tag)">{{tag}}</q-tab>
        </q-tabs>
        <q-card class="q-mt-md q-mr-sm text-blue-grey-9">
          <q-input v-model="searchWord" debounce="500" filled placeholder="search blog">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </q-card>
          <blog-card
            v-for="(blog, blogIdx) in filteredBlogList"
            :key="`blog-${blogIdx}`"
            :blog="blog"
          ></blog-card>
        <q-btn
          class="q-mt-md q-mr-sm bg-blue-grey-9 text-grey-2"
          icon="add"
          label="write blog"
          @click="toBlogeditor"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import blogCard from "components/blog-card";

export default {
  components: {
    blogCard
  },
  computed: {
    listOfTag() {
      return this.$store.state.blogStore.tagList;
    },
    filteredBlogList() {
      let a =
        this.$store.getters.getFilterBlogList ||
        this.$store.getters.getBlogList;
      console.log(a);
      return a;
    },
    searchWord: {
      get() {
        return this.$store.state.blogStore.searchWord;
      },
      set(value) {
        this.$store.dispatch("filteredBlogs", value);
      }
    }
  },
  methods: {
    tagFilter(tag) {
      console.log(tag);
      this.$store.dispatch("filteredByTag", tag);
    },
    toBlogeditor() {
      this.$router.push({ name: "blog-editor" });
    },
    
  }
};
</script>
 
<style>
.blog-container {
  width: 800px;
}
</style>
 