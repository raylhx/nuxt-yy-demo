<template>
  <div>
    <YYHeader/>
    <nuxt/>
    <YYFooter/>
  </div>
</template>

<script>
import YYHeader from '~/components/Header.vue'
import YYFooter from '~/components/Footer.vue'

export default {
  components: {
    YYFooter,
    YYHeader
  }
}
</script>

<style>

</style>
