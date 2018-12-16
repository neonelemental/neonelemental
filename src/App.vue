<template>
  <main id="app" class='animated' :class="computedClasses">
    <nav>
      <div class="nav-left">
        <a href='javascript:void(0)' id='menu-toggle' class="animated btn small" @click="sidebarOpen = !sidebarOpen">
          <font-awesome-icon :icon="sidebarIcon"/>
        </a>
      </div>
      <div class="nav-right">
        <a class="btn small accent _mr" href="javascript:void(0)" @click="toggleTheme">
          <font-awesome-icon icon="envelope"/>
        </a>
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
  import isMobile from '@mixins/isMobile'

  export default {
    components: {
      Sidebar
    },
    mixins: [isMobile],
    data () {
      let isMobile = this.isMobile()

      return {
        sidebarOpen: !isMobile,
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
      computedClasses () {
        let classString = ''
        classString += ( this.theme.dark ? 'theme-dark ' : 'theme-light ' )
        classString += ( this.sidebarOpen ? 'mobile-menu-open ' : '') // If menu is open add mobile responsive class
        return classString
      },
    },
    methods: {
      toggleTheme() {
        [this.theme.dark, this.theme.light] = this.theme.dark ? [false, true] : [true, false]
      }
    }
  }
</script>
