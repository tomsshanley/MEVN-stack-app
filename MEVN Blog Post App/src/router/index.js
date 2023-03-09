import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'home',
      component: Home
  },
  {
      path: "/about",
      name: 'about',
      component: About
  },
  {
    path: "/add-post",
    name: 'add-post',
    component: AddPost
  },
  {
    path: "/edit-post/:id",
    name: 'edit-post',
    component: EditPost
  },
  {
    path: "/posts/:id",
    name: 'post',
    component: Post
  }
  ]
})

export default router
