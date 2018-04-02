<template>
  <div class="container">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Costo</th>
          <th>Opciones</th>
        </tr>  
      </thead> 
      <tbody>
        <tr v-for="(item, key) in items" :key="item._id">
          <td>{{ item._id}}</td>
          <td>{{ item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <router-link  class="button is-info" :to="{name: 'EditItem', params: {id: item._id}}"> Actualizar </router-link>
            <a class="button is-danger" v-on:click="eliminar(item._id, key)">Eliminar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        items: {}
      }
    },
    created(){
      this.fetchItems()
    },
    methods: {
      fetchItems() {
        this.axios.get('/item')
        .then(res => {
          this.items = res.data
        })
        .catch(err => console.log(err))
      },
      eliminar(id, key) {
        const response = confirm('Esta seguro de eliminar este item')
        if(response){
          this.axios.delete('/item/'+id+'' )
          .then(res => {
            this.items.splice(key, 1)
          })
          .catch(err => console.log(err))
        }
      }
    }
  }  
</script>

