<template>
  <div class="card">
    <header class="card-header">
    <p class="card-header-title">
        Agregar un Usuario
      </p>
    </header>  
    <form v-on:submit.prevent="addUser()">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input class="input" type="text" v-model="user.name" placeholder="Nombre">
        </div>
        <p class="help">Nombre completo</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" v-model="user.email" placeholder="Email">
        </div>
        <p class="help">Email</p>
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
          uid: null
        }
      }
    },
    methods: {
      addUser () {
        const randon = Math.floor((Math.random() * 100) + 1)
        this.user.uid = randon 
        this.axios.post('/api/user', this.user)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>