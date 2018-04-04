<template>
  <div class="card">
    <header class="card-header">
    <p class="card-header-title">
        Agregar Alerta
      </p>
    </header>  
    <form v-on:submit.prevent="addTemaAlert()">

      <div class="field">
        <div class="control">
          <div class="select is-primary">
            <select v-model="temaAlerta.user">
              <option v-for="user in users" v-bind:value="user._id" :key="user._id"> {{ user.name }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <div class="select is-primary">
            <select v-model="temaAlerta.nodo">
              <option v-for="node in nodes" v-bind:value="node._id" :key="node._id"> {{ node.title }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Nombre del tema</label>
        <div class="control">
          <input class="input" type="text" v-model="temaAlerta.name_site" placeholder="Nombre del tema">
        </div>
        <p class="help">Nombre completo</p>
      </div>

      <div class="field">
        <label class="label">URL del tema</label>
        <div class="control">
          <input class="input" type="text" v-model="temaAlerta.url" placeholder="URL del tema">
        </div>
        <p class="help">URL completa</p>
      </div>

      <div class="control">
        <button class="button is-primary">Guardar</button>
      </div>
    </form>
  </div>
</template>
<script>
   export default {
    data(){
      return {
        temaAlerta: {
          aid: null
        },
        users: {},
        nodes: {}
      }
    },
    created(){
      this.fetchUsers()
      this.fetchNodes()
    },
    methods: {
      addTemaAlert(){
        const randon = Math.floor((Math.random() * 100) + 1)
        this.temaAlerta.aid = randon 

        console.log(this.temaAlerta)

        this.axios.post('/api/theme', this.temaAlerta)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))

      },
      fetchUsers() {
        this.axios.get('/api/user/')
        .then(res => {
          this.users = res.data
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
    }
  }
</script>
