<template>
<div><div>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-navbar-brand href="#">CUSER</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item router-link to="/">Home</b-nav-item>
        <b-nav-item router-link to="/live-chat">Bantuan</b-nav-item>
        <b-nav-item router-link to="/live-chat">Live Chat</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div></div>

</template>

<script>
export default{
    
}
</script>