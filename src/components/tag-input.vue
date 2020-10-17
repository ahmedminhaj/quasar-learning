<template>
  <div class="tag-input q-mx-md">
    <div v-for="(tag, index) in value" :key="index" class="tag-input__tag">
      <span @click="removeTag(index)">x</span>
      {{ tag }}
    </div>
    <input
      type="text"
      ref="tagInput"
      v-model="searchedTag"
      placeholder="Enter a Tag"
      class="tag-input__text"
      @input="filterTag"
      @keydown.enter="addTag"
      @keydown.188="addTag"
      @focus="filterTag"
    >

    <q-menu :value="filteredList.length > 0" no-focus :target="$refs.tagInput">
      <q-list style="min-width: 200px">
        <q-item
          clickable
          v-close-popup
          v-for="(tag, index) in filteredList"
          :key="index"
          @click="setTag(tag)"
          class="list-item"
        >
          <q-item-section class="q-pb-xs">
            <q-item-label>{{tag}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>
<script>
import utlCloneDeep from "lodash/cloneDeep";
export default {
  props: ["value", "allTag"],
  data() {
    return {
      searchedTag: "",
      filteredList: [],
      showSuggestion: false
    };
  },
  methods: {
    addTag(event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        this.value.push(val);
        event.target.value = "";
      }
      this.searchedTag = "";
    },
    removeTag(index) {
      this.value.splice(index, 1);
    },
    removeLastTag() {
      this.value.splice(this.value.length - 1);
    },
    filterTag() {
      if (!this.searchedTag == "") {
        this.filteredList = this.allTag.filter(tag => {
          return tag.toLowerCase().startsWith(this.searchedTag.toLowerCase());
        });
      } else {
        this.filteredList = [];
      }
    },
    setTag(tag) {
      this.searchedTag = tag;
      this.value.push(this.searchedTag);
      this.searchedTag = "";
      this.showSuggestion = false;
    }
  }
};
</script>
<style>
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
.list-item {
  background-color: #f5f5f5;
  margin-bottom: 2px;
}
</style>
