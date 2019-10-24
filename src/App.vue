<template>
  <div id="app">
    
    <div class="container">
    
    <div class="content-body">
    <aplikasi-header/>
      <router-view></router-view>
    </div>
    </div>
    <aplikasi-footer/>
  </div>
</template>

<script>
import Header from './main-components/Header'
import Footer from './main-components/Footer'

export default {
  name: 'app',
  components: {
    'aplikasi-header' : Header,
    'aplikasi-footer' : Footer
  }
}
</script>

<style>
  .content-body{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 70px;
  }
</style>
