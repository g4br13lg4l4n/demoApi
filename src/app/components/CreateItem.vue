<template>
  <div class="card">
    <header class="card-header">
    <p class="card-header-title">
        Agregar un Usuario
      </p>
    </header>  
    <form v-on:submit.prevent="addUser()">
      <div class="field">
        <label class="label">url</label>
        <div class="control">
          <input class="input" type="text" v-model="user.url" placeholder="url">
        </div>
      </div>

      <div class="field">
        <label class="label">title</label>
        <div class="control">
          <input class="input" type="text" v-model="user.title" placeholder="title">
        </div>
      </div>

      <div class="field">
        <label class="label">images</label>
        <div class="control">
          <input class="input" type="text" v-model="user.images" placeholder="images">
        </div>
      </div>

      <div class="field">
        <label class="label">summary</label>
        <div class="control">
          <input class="input" type="text" v-model="user.summary" placeholder="summary">
        </div>
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
        user: {
          nid: null,
          tid: null
        }
      }
    },
    methods: {
      addUser () {
        const randon = Math.floor((Math.random() * 100) + 1)
        this.user.nid = randon 
        this.user.tid = randon

        this.axios.post('/api/nodos', this.user)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>