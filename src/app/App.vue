<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Titulo principal
          </h1>
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><router-link class="navbar-item" :to="{name: 'DisplayItem'}"> HOME </router-link></li>
              <li><router-link class="navbar-item" :to="{name: 'CreateItem'}"> Crear Item </router-link></li>
              <li><router-link class="navbar-item" :to="{name: 'Chat'}"> Chat </router-link></li>
            </ul>
          </nav>  
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {

  }
</script>

<style>

</style>
