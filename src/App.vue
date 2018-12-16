<template>
  <main id="app" class='animated' :class="theme.dark ? 'theme-dark' : 'theme-light'">
    <nav>
      <div class="nav-left">
        <a href='javascript:void(0)' id='menu-toggle' class="animated btn small" @click="sidebarOpen = !sidebarOpen">
          <font-awesome-icon :icon="sidebarIcon"/>
        </a>
      </div>
      <div class="nav-right">
        <a class="btn small accent" href="javascript:void(0)" @click="toggleTheme">
          <font-awesome-icon :icon="themeIcon"/>
        </a>
      </div>
    </nav>

    <sidebar :open="sidebarOpen"/>
    <div class="content">
      <router-view/>
    </div>
  </main>
</template>

<script>
  import Sidebar from '@sections/Sidebar'

  export default {
    components: {
      Sidebar
    },
    data () {
      return {
        sidebarOpen: true,
        theme: {
          dark: true,
          light: false,
        }
      }
    },
    computed: {
      sidebarIcon () {
        return this.sidebarOpen ? 'times' : 'bars'
      },
      themeIcon () {
        return this.theme.dark ? 'lightbulb' : 'moon'
      },
    },
    methods: {
      toggleTheme() {
        [this.theme.dark, this.theme.light] = this.theme.dark ? [false, true] : [true, false]
      }
    }
  }
</script>
