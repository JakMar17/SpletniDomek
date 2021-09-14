<template>
  <nav style="background-color: #f4f4f4;" class="level navbar has-background-transparent">
<!--     <p class="level-item has-text-centered">
      <nuxt-link to="/zahteve" class="link is-info">Zahteve</nuxt-link>
    </p>
    <p class="level-item has-text-centered">
      <nuxt-link to="/izkusnje" class="link is-info">Izkušnje</nuxt-link>
    </p> -->
    <p class="level-item has-text-centered">
      <nuxt-link to="/" class="navbar-item">
        <img
          class="is-centered image"
          src="~assets/images/avatar_cropped.png"
        />
        <p style="margin-left: 1vw">Jakob</p>
      </nuxt-link>
    </p>
<!--     <p class="level-item has-text-centered">
      <nuxt-link to="/nasvidenje-mi-smo-sdl-2021" class="link is-info"
        >Blog</nuxt-link
      >
    </p>
    <p class="level-item has-text-centered">
      <nuxt-link to="/kontakt">Kontakt</nuxt-link>
    </p> -->
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
