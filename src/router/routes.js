import HelloWorld from "pages/hello-world"
import TestView from "pages/test-view"
import TaskList from "pages/task-list"
import BlogList from "pages/blog-list"
import IndexView from "pages/Index"
import customLayout from "layouts/custom-layout"
import BlogEditor from "pages/blog-editor"
import TestAnime from "pages/test-animation"

const routes = [{
    path: '/',
    component: customLayout,
    children: [{
        path: 'idx',
        component: IndexView,
      },
      {
        path: 'hello',
        component: HelloWorld
      },
      {
        path: 'test',
        component: TestView
      },
      {
        path: 'task',
        component: TaskList
      },
      {
        path: 'blog',
        name: 'blog',
        component: BlogList
      },
      {
        path: 'blog-editor',
        name:"blog-editor",
        component: BlogEditor
      },
      {
        path: 'anime',
        name: 'anime',
        component: TestAnime
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
