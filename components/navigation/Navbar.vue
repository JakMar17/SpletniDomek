<template>
  <nav
    class="navbar has-background-info"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link to="/" class="link is-info navbar-item">
        <img
          class="is-centered image"
          src="~assets/images/avatar_cropped.png"
        />
        <p style="margin-left: 1vw">Jakob</p>
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="cv" class="link navbar-item">Življenjepis</nuxt-link>
        <a class="navbar-item"> Blog </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              href="https://github.com/jakmar17"
              target="_blank"
              class="end-icon"
            >
              <b-icon icon="github"></b-icon>
            </a>
            <a
              href="https://marela.team"
              target="_blank"
              class="end-icon"
            >
              <b-icon icon="umbrella"></b-icon>
            </a>
            <!-- <a class="end-icon">
              <b-icon icon="magnify"></b-icon>
            </a> -->
          </div>
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
