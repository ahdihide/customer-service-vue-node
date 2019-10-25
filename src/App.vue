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
  body{
    background-color: red;
  }

  .navbar{
    background-color: blue;
  }
  .content-body{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 70px;
  }

  .btn-custom{
    border-radius: 0px;
  }

 .card{
   min-height : 200px;
   border: 0px;
   border-radius: 0px;
 }

  .border-title{
    width: 60px;
    height: 10px;
    background-color: green;
    border-radius: 40px;
    margin-top: -9px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
