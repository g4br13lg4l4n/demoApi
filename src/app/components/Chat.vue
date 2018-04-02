<template>
  <div class="panel">
    <div class="section">
      <div class="panel-block columns">
        <div class="notification is-primary">
          <button class="delete"></button>
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <form v-on:submit.prevent="send()">
        <div class="panel-block columns">
          <div class="column is-four-fifths">
            <div class="control">
              <input class="input is-primary" v-model="message" type="text" placeholder="Mensaje ...">
            </div>
          </div>
          <div class="column">
            <div class="control">
              <submit v-on:click="send()" class="button is-link is-outlined is-fullwidth">Enviar</submit>
            </div>  
          </div>  
        </div>
      </form>
    </div>   
  </div>  
</template>

<script>
  import Module from '../modules/counterModule'
  export default {
    mixins: [Module],
    data(){
      return {
        message: null
      }
    },
    methods: {
      send() {
        this.$socket.emit('chat message', this.message)
      }
    },
    sockets:{
      connect: function(){
        console.log('socket connected')
      },
      customEmit: function(val){
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      }
    },
  } 
</script>
