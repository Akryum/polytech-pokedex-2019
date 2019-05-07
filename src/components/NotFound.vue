<template>
  <div class="not-found">
    <h1>There is nothing here to see.</h1>
    <p>
      The page was not found.
    </p>
    <p>
      <router-link :to="{ name: 'home' }">
        Go back home
      </router-link>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
.not-found
  margin $padding
</style>
