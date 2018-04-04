<template>
  <div class="card">
    <header class="card-header">
    <p class="card-header-title">
        Agregar un Nodo
      </p>
    </header>  
    <form v-on:submit.prevent="addNodo()">
      <div class="field">
        <label class="label">URL</label>
        <div class="control">
          <input class="input" type="text" v-model="nodo.url" placeholder="Nombre">
        </div>
        <p class="help">URL</p>
      </div>

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" v-model="nodo.title" placeholder="Email">
        </div>
        <p class="help">Title</p>
      </div>

      <div class="field">
        <label class="label">Imagen(s)</label>
        <div class="control">
          <input class="input" type="text" v-model="nodo.image" placeholder="Email">
        </div>
        <p class="help">Imagen(s)</p>
      </div>

      <div class="field">
        <label class="label">sumary</label>
        <div class="control">
          <input class="input" type="text" v-model="nodo.sumary" placeholder="Email">
        </div>
        <p class="help">sumary</p>
      </div>
      <div class="control">
        <button class="button is-primary">Guardar</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nodo: {
          nid: null,
        }
      }
    },
    methods: {
      addNodo(){
        const randon = Math.floor((Math.random() * 100) + 1)
        this.nodo.nid = randon 
        this.axios.post('/api/nodo', this.nodo)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>