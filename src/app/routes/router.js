import DisplayItem from '../components/DisplayItem.vue'
import CreateItem from '../components/CreateItem.vue'
import EditItem from '../components/EditItem.vue'
import CreateNodo from '../components/CreateNodo.vue'
import TemaAlerta from '../components/TemaAlerta.vue'
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
  },
  {
    name: 'CreateNodo',
    path: 'CreateNodo',
    component: CreateNodo
  },
  {
    name: 'TemaAlerta',
    path: 'TemaAlerta',
    component: TemaAlerta
  }
]

export default routes