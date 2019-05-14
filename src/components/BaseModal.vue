<template>
  <div class="base-modal">
    <div class="shell">
      <div class="header">
        <div class="title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <button
          class="close"
          @click="close()"
        >
          x
        </button>
      </div>

      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-modal
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  background rgba(white, .8)

.shell
  padding 12px
  border-radius 10px
  background white
  box-shadow 0 5px 30px rgba(black, .3)
  min-width 600px
  min-height 300px
  display flex
  flex-direction column

.header
  flex auto 0 0
  display flex
  align-items center

.title
  flex 1
  font-size 20px
  text-align center

.close
  width 32px
  height @width
  display flex
  align-items center
  justify-content center

.body
  flex 1
  padding-top 12px
</style>
