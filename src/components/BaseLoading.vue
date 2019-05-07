<template>
  <div class="base-loader">
    <div class="animation" />
  </div>
</template>

<style lang="stylus" scoped>
.base-loader
  display flex
  align-items center
  justify-content center

  .animation
    width 24px
    height @width
    border solid 2px transparent
    border-right-color $color-primary
    border-bottom-color $color-primary
    border-radius 50%
    animation animation .5s infinite linear

@keyframes animation
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
