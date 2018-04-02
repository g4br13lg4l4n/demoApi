<template>
  <div class="card">
    <header class="card-header">
    <p class="card-header-title">
        Agregar un item
      </p>
    </header>  
    <form v-on:submit.prevent="addItem()">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input class="input" type="text" v-model="item.name" placeholder="Nombre">
        </div>
        <p class="help">This is a help text</p>
      </div>

      <div class="field">
        <label class="label">Precio</label>
        <div class="control">
          <input class="input" type="text" v-model="item.price" placeholder="Precio">
        </div>
        <p class="help">This is a help text</p>
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
        item: {}
      }
    },
    methods: {
      addItem () {
        this.axios.post('/item', this.item)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>