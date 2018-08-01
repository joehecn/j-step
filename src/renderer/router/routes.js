
import Login from '@/views/Login.vue'
import Chat from '@/views/Chat.vue'

export default [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]