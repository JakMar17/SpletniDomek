<template>
  <section class="hero is-danger has-background is-fullheight">
    <img
      alt="Background"
      class="hero-background is-transparent"
      src="@/assets/images/naslovna_white.png"
    />
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">Mi smo ŠDL!</p>
        <p class="subtitle">
          Dovolj je bilo. Mi smo ŠDL. Mi bomo odločali, kako želimo živeti.
        </p>
        <div class="buttons is-centered" style="margin-top: 10vh">
          <b-button
            @click="goToFacebook()"
            class="is-primary"
            icon-left="facebook"
            >Pridruži se Facebook skupini</b-button
          >
          <nuxt-link to="/zahteve">
            <b-button class="is-info" icon-left="format-list-text"
              >Naše zahteve</b-button
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToFacebook() {
      window.open('https://www.facebook.com/groups/1048836725163325/user/100011708613435/', '_blank')
    },
  },
}
</script>

<style scoped>
.hero.has-background {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

.hero-background.is-transparent {
  opacity: 0.3;
}

.hero.is-success {
  opacity: 0.75;
}

.hero.is-danger {
  opacity: 0.9;
}
</style>
