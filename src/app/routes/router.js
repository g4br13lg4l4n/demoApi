import DisplayItem from '../components/DisplayItem.vue'
import CreateItem from '../components/CreateItem.vue'
import EditItem from '../components/EditItem.vue'
import Chat from '../components/Chat.vue'

const routes = [
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
    name:'CreateItem',
    path: '/CreateItem',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/EditItem/:id',
    component: EditItem
  },
  {
    name:'Chat',
    path: 'Chat',
    component: Chat
  }
]

export default routes