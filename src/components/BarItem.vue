<template>
  <router-link :to="path" class="tab-item">
    <span class="icon" :class="iconClass"></span>
    <span class="tab-label">{{label}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
}
</script>
