<template>
  <main id="app">
    <sidebar>
      <img class='logo' src="./assets/images/image.jpeg"/>
      <a href="javascript:void(0)">hello</a>
    </sidebar>
    <router-view/>
  </main>
</template>

<script>
  import Sidebar from '@sections/Sidebar'

  export default {
    components: {
      Sidebar
    }
  }
</script>
