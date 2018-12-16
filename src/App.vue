<template>
  <main id="app" class='animated' :class="theme.dark ? 'theme-dark' : 'theme-light'">
    <a id="theme-picker" class="btn small" href="javascript:void(0)" @click="toggleTheme">
      <font-awesome-icon :icon="themeIcon"/>
    </a>
    <router-view/>
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
        theme: {
          dark: true,
          light: false
        }
      }
    },
    computed: {
      themeIcon () {
        return this.theme.dark ? 'sun' : 'moon'
      }
    },
    methods: {
      toggleTheme() {
        [this.theme.dark, this.theme.light] = this.theme.dark ? [false, true] : [true, false]
      }
    }
  }
</script>
