<template>
  <div
    class="base-image"
    :class="{
      loaded
    }"
  >
    <img
      v-bind="$attrs"
      class="image"
      @load="loaded = true"
    >

    <transition name="fade">
      <BaseLoading
        v-if="!loaded"
      />
    </transition>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  data () {
    return {
      loaded: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-image
  position relative

  .image
    width 100%
    height @width
    opacity 0
    transition opacity .15s
  &.loaded
    .image
      opacity 1

  .base-loader
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
