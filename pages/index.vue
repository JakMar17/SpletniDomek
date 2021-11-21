<template>
  <main style="min-height: 100vh; padding-top: 10vh">
    <img class="avatar" src="~assets/images/avatar.png" />
    <h1 class="jaz-jakob">Jaz, Jakob</h1>

    <div class="icons">
      <a
        href="mailto:jakob@marela.team"
        target="_blank"
        style="margin-right: 1vw"
      >
        <b-tooltip label="jakob@marela.team" position="is-bottom">
          <b-icon icon="email-outline" />
        </b-tooltip>
      </a>
      <a href="https://facebook.com/jakmar17" target="_blank">
        <b-tooltip label="Facebook" position="is-bottom">
          <b-icon icon="facebook" />
        </b-tooltip>
      </a>
      <a
        href="https://github.com/jakmar17"
        target="_blank"
        style="margin-right: 1vw"
      >
        <b-tooltip label="GitHub" position="is-bottom">
          <b-icon icon="github" />
        </b-tooltip>
      </a>
      <a href="https://marela.team" target="_blank">
        <b-tooltip label="MarelaTeam" position="is-bottom">
          <b-icon icon="umbrella" />
        </b-tooltip>
      </a>
      <div style="margin-top: 2vh">
        <nuxt-link to="/blog" style="margin-right: 2vw">
          <b-icon icon="file-document-edit-outline" />
          Blog
        </nuxt-link>
        <nuxt-link to="/cv">
          <b-icon icon="file-document-outline" />
          Življenjepis
        </nuxt-link>
      </div>
    </div>

    <!-- <p class="centered-margin">
      Študent računalništva, ki ga je tehnologija navduševala že od malih nog.
      Danes programer full-stack spletnih aplikacij z namemom olajšanja
      življenja sebi in drugim.
    </p> -->

    <div class="tech-stack">
      <div class="column">
        <b-icon size="is-large" icon="angular" style="color: red" />
        <b-icon size="is-large" icon="nuxt" style="color: green" />
        <b-icon size="is-large" icon="cellphone" />
        <h2>Frontend</h2>
        <p class="centered-margin">
          Razvoj spletnih aplikacij v Angular in NuxtJS ter razvoj hibridnih
          mobilnih aplikacij v Flutter in Ionic frameworku
        </p>
      </div>
      <div class="column">
        <b-icon size="is-large" icon="language-java" style="color: blue" />
        <!-- <b-icon size="is-large" icon="language-python" style="color: #f3d602" /> -->
        <b-icon size="is-large" icon="nodejs" style="color: #f3d602" />
        <h2>Backend</h2>
        <p class="centered-margin">
          Razvoj zalednih storitev v SpringBoot (Java & Kotlin) in NodeJS
        </p>
      </div>
      <div class="column">
        <b-icon size="is-large" icon="database" />
        <h2>Podatkovne baze</h2>
        <p class="centered-margin">
          Načrtovanje in uporaba SQL podatkovnih baz Oracle, MariaDB in
          PostgreSQL ter NoSQL baze MongoDB.
        </p>
      </div>
    </div>

    <h2 style="margin-top: 6vh" class="subtitle is-2 has-text-centered">
      Izpostavljeni projekti
    </h2>
    <hr />
    <div class="container" style="padding-bottom: 8vh">
      <div class="columns is-centered is-vcentered is-multiline">
        <div v-for="(item, i) of projects" :key="i" class="column is-4">
          <nuxt-link :to="'project/' + item.project_name" class="box h-100">
            <div class="columns">
              <div class="column">
                <h3 class="title is-4">{{ item.project_name }}</h3>
              </div>
              <div class="column is-narrow">
                <b-icon
                  v-for="(stack, ii) of item.stack"
                  :key="ii"
                  :icon="stack.icon"
                />
              </div>
            </div>
            <p>
              {{ item.description_short }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- <div class="container" style="padding-bottom: 8vh">

      <div class="centered-columns">
        <div class="column container">
          <a class="box" href="https://fb.marela.team/" target="_blank">
            <div class="columns">
              <div class="column">
                <h3 class="title is-4">Odtujeni podatki</h3>
              </div>
              <div class="column is-narrow">
                <b-icon icon="nuxt" />
                <b-icon icon="language-java" />
              </div>
            </div>
            <p>
              Iskalnik po bazi s Facebooka odtujeni telefonskih številk in
              ostalih osebnih podatkov.
            </p>
          </a>
        </div>

        <div class="column">
          <a class="box" href="https://tracking-corona.web.app" target="_blank">
            <div class="columns">
              <div class="column">
                <h3 class="title is-4">CoronaTracker</h3>
              </div>
              <div class="column is-narrow">
                <b-icon icon="angular" />
              </div>
            </div>
            <p>
              Aplikacija za spremljanje števila potrjenih primerov covid-19 po
              svetu in po državah.
            </p>
          </a>
        </div>

        <div class="column">
          <a class="box" href="https://sd-lj.com/" target="_blank">
            <div class="columns">
              <div class="column">
                <h3 class="title is-4">Mi smo ŠDL</h3>
              </div>
              <div class="column is-narrow">
                <b-icon icon="nuxt" />
                <b-icon icon="language-java" />
                <b-icon icon="nodejs" />
              </div>
            </div>
            <p>
              Spletna stran iniciative Mi smo ŠDL, integracija z zalednimi
              sistemi in Ghost blogersko platformo.
            </p>
          </a>
        </div>
      </div>
    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return { projects: {} }
  },
  async asyncData({ $strapi }) {
    let projects = {}
    try {
      projects = await $strapi.find('projects', 'exposed=true')
    } catch (error) {
      console.error(error)
    }

    return { projects }
  },
  async mounted() {
    try {
      this.projects = await this.$strapi.find('projects', 'exposed=true')
    } catch (error) {
      console.error(error)
    }
  },
  head() {
    return {
      title: "Jakobov spletni domek",
      meta: [
        ...createSEOMeta({
          title: 'Jakobov spletni domek',
          description:
            'Jakob je programer. Vsaj želi si biti. To je Jakobov spletni domek, pa tudi Jakobova spletna oglasna deska in Jakobov življenjepis in Jakobov blog in Jakobov projekt.',
          url: 'https://jakob.marela.team/',
          image: 'https://jakob.marela.team/_nuxt/img/avatar.127b104.png',
        }),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 20vh;
}
.jaz-jakob {
  font-size: 64px;
  font-family: 'Caveat';
  text-align: center;
  // padding-top: 5vh;
  font-weight: 200;
}

.centered-columns {
  @extend .columns, .is-centered, .is-vcentered;
}

.icons {
  text-align: center;
  margin-bottom: 3vh;
}

p {
  font-size: 85%;
}

.centered-margin {
  margin: 0 5vw 0 5vw;
  text-align: center;
}

.large-icon {
  size: 250px;
}

.tech-stack {
  @extend .centered-columns, .has-text-centered;
  margin: 8vh 0 0 0;
  h2 {
    @extend .is-3, .subtitle;
    padding-bottom: 0;
    margin-bottom: 0 !important;
  }
}
</style>