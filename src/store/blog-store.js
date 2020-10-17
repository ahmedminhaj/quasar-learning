export default {
  state: {
    blogList: [{
        id: 0,
        title: "Vue new version",
        author: "Evan You",
        details: "The best way to force Vue to re-render a component is to set a :key on the component. When you need the component to be re-rendered, you just change the value of the key and Vue will re-render the component.",
        tagList: ["framework", "new", "js"]
      },
      {
        id: 1,
        title: "VueX mapAction",
        author: "Steve Joe",
        details: "I was working in a big project, I integrated vuex on that project in one point of development progress Everything was going well but I got one problem, may be it is not any problem , It could be a mis conception of me about vuexTo demonstrate that mis conception or issue I created this very simple application, unfortunately I face same issue here also,",
        tagList: ["storage"]
      },
      {
        id: 2,
        title: "VueX modules",
        author: "Jack Maa",
        details: "Hey guys, I've been making a tool using Vue and I've been told that I shouldnt be using $forceUpdate() so much but I really dont understand how to not use it. Granted, I am new to Vue and only started figuring it out this month.",
        tagList: ["storage", "new"]
      },
      {
        id: 3,
        title: "Quasar update",
        author: "Jabbar Alee",
        details: "In this manner, if you do it slowly and methodologically you can see issues and resolve them quickly. This is the opposite of upgrading a project in-place, which can break everything simultaneously. Should you go with the upgrade, we have assembled the steps needed below. However, you will still need to update any Quasar components that went through a revision to get to v1.",
        tagList: ["framework"]
      },

    ],
    tagList: ["all", "framework", "js", "storage", "new"],
    searchWord: null,
    filteredBlog: null,
    seletedTag: null,
    tagFilteredBlog: null,
  },
  getters: {
    getBlogList: (state) => state.blogList,
    getSearchWord: (state) => state.searchWord,
    getFilterBlogList: (state) => state.filteredBlog,
  },
  mutations: {
    filterBlogList(state, word) {
      if (!(word) || word === {}) {
        state.searchWord = null
        state.filteredBlog = null
      } else {
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredBlog = state.blogList.filter((blog) => {
          return blog.title.toLowerCase().includes(word)
        })
      }
    },
    tagFilter(state, tag) {
      if (!(tag) || tag === {}) {
        state.seletedTag = "all"
        state.filteredBlog = state.blogList || state.filteredBlog
      } else {
        if (tag == "all") {
          state.seletedTag = "all"
          state.filteredBlog = state.blogList
        } else {
          state.seletedTag = tag
          state.filteredBlog = state.blogList.filter((blog) => {
            return blog.tagList.includes(tag)
          })
        }

      }
    },

    publishBlog(state, blog) {
      if (blog.title != "" && blog.tag_list.length > 0 && blog.author != "") {
        var lastItem = Object.keys(state.blogList).pop();
        var newId = (lastItem === undefined) ? 0 : state.blogList[lastItem].id + 1;
        state.blogList[newId] = {
          id: (newId === undefined) ? 0 : newId,
          title: blog.title,
          author: blog.author,
          details: blog.details,
          tagList: blog.tag_list
        }
        blog.tag_list.forEach(newtag => {
          newtag = newtag.trim().toLowerCase()

          if (!state.tagList.includes(newtag)) {
            state.tagList.push(newtag)
          }

        });
      } else {
        alert("Please fillup all input field")
      }
      console.log(state.blogList)
    }
  },
  actions: {
    filteredBlogs({
      commit
    }, word) {
      commit('filterBlogList', word)
    },
    filteredByTag({
      commit
    }, tag) {
      commit('tagFilter', tag)
    },
    publishNewBlog({
      commit
    }, blog) {
      commit("publishBlog", blog)
    }
  }
}
