<template>
  <div class="container">
    <div class="panel">
      <p class="panel-heading">
        Usuarios
      </p>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>UID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Opciones</th>
          </tr>  
        </thead> 
        <tbody>
          <tr v-for="(item, key) in items" :key="item._id">
            <td>{{ item._id}}</td>
            <td>{{ item.uid}}</td>
            <td>{{ item.name}}</td>
            <td>{{item.email}}</td>
            <td>
              <router-link  class="button is-info" :to="{name: 'EditItem', params: {id: item._id}}"> Actualizar </router-link>
              <a class="button is-danger" v-on:click="eliminar(item._id, key)">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel">
      <p class="panel-heading">
        Nodos
      </p>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>nid</th>
            <th>sumary</th>
            <th>title</th>
            <th>url</th>
            <th>Opciones</th>
          </tr>  
        </thead> 
        <tbody>
          <tr v-for="(node, key) in nodes" :key="node._id">
            <td>{{ node._id}}</td>
            <td>{{ node.image}}</td>
            <td>{{ node.nid}}</td>
            <td>{{ node.sumary}}</td>
            <td>{{ node.title}}</td>
            <td>{{node.url}}</td>
            <td>
              <router-link  class="button is-info" :to="{name: 'EditItem', params: {id: node._id}}"> Actualizar </router-link>
              <a class="button is-danger" v-on:click="eliminar(node._id, key)">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel">
      <p class="panel-heading">
        Temas de alertas
      </p>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID:</th>
            <th>aid:</th>
            <th>uid:</th>
            <th>nid:</th>
            <th>name_alert:</th>
            <th>url:</th>
            <th>Opciones</th>
          </tr>  
        </thead> 
        <tbody>
          <tr v-for="(theme, key) in themes" :key="theme._id">
            <td>{{ theme._id}}</td>
            <td>{{ theme.aid}}</td>
            <td>{{ theme.user}}</td>
            <td>{{ theme.nodo}}</td>
            <td>{{ theme.name_alert}}</td>
            <td>{{theme.url}}</td>
            <td>
              <router-link  class="button is-info" :to="{name: 'EditItem', params: {id: theme._id}}"> Actualizar </router-link>
              <a class="button is-danger" v-on:click="eliminar(theme._id, key)">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        items: {},
        nodes: {},
        themes: {}
      }
    },
    created(){
      this.fetchItems()
      this.fetchNodes()
      this.fecthThemes()
    },
    methods: {
      fecthThemes(){
        this.axios.get('/api/themes')
        .then(res => {
          this.themes = res.data
        })
        .catch(err => console.log(err))
      },
      fetchItems() {
        this.axios.get('/api/user/')
        .then(res => {
          this.items = res.data
        })
        .catch(err => console.log(err))
      },
      fetchNodes() {
        this.axios.get('/api/nodo/')
        .then(res => {
          this.nodes = res.data
        })
        .catch(err => console.log(err))
      },
      eliminar(id, key) {
        const response = confirm('Esta seguro de eliminar este Usuario')
        if(response){
          this.axios.delete('/api/user/'+id+'' )
          .then(res => {
            this.items.splice(key, 1)
          })
          .catch(err => console.log(err))
        }
      }
    }
  }  
</script>

