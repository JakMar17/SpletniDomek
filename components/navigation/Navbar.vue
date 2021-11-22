<template>
  <nav class="navbar" role="navigation" style="background-color: #F4F4F4; height: 64px" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="level-item has-text-centered">
      <nuxt-link to="/" class="navbar-item">
        <img
          class="is-centered image"
          style="height: 64px"
          src="~assets/images/avatar_cropped.png"
        />
        <div style="margin-left: 1vw">
          <div class="has-text-black has-text-weight-bold">
            Jakobov spletni domek
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>

  <div class="navbar-menu">
        <div class="navbar-end">
      <div class="navbar-item">
        <NuxtLink to="/cv" class="navbar-item has-text-black">
        Življenjepis
      </NuxtLink>
      </div>
      <div class="navbar-item">
        <NuxtLink to="/blog" class="navbar-item has-text-black">
        Blog
      </NuxtLink>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 3vh;
  a {
    color: white;
  }
  a:hover {
    color: black;
  }
}
.end-icon {
  padding-right: 2vw;
}
</style>
