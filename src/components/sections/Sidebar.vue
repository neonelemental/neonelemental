<template>
  <div class="sidebar" :class="$props.open ? null : 'collapsed'">

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      open: Boolean
    }
  }
</script>
