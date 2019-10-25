<template>
<div>
  
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
    <div class="container" style="margin-left: 17%; margin-right: 17%;">
      <b-navbar-brand router-link to="/"><img src="https://ecs7.tokopedia.net/assets/images/careers/site-logo.svg" style="width: 100px;" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/help">Bantuan</b-nav-item>
          <b-nav-item router-link to="/live-chat">Live Chat</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
       </div>
    </b-navbar>
 
</div>

</template>

<script>
export default{
    
}
</script>