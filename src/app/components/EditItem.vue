<template>
  <form class="form" v-on:submit.prevent="updateItem()">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input class="input" v-model="item.name" type="text" placeholder="Text Nombre">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="item.price" type="text" placeholder="Text Email">
        </div>
      </div>
      <div class="control">
        <button class="button is-primary">Guardar</button>
      </div>
  </form>
</template>
<script>
  export default {
    data(){
      return {
        item: {}
      }
    },
    created(){
      this.getItem()
    },
    methods: {
      getItem(){
        this.axios.get('/api/'+this.$route.params.id+'')
          .then(res => {
            this.item = res.data
          })
      },
      updateItem() {
        this.axios.put('/api/'+this.item._id+'', this.item)
        .then(res => {
          this.$router.replace({name: 'DisplayItem'})
        })
      }
    }
  }
</script>
