<template>
  <main class="container" style="padding: 0vh 1vw 4vh 1vw">
    <div style="padding: 3vh 5vw 0 5vw">
      <div class="has-text-centered" style="margin-bottom: 3vh">
        <h1 class="title is-3">Jakob Marušič</h1>
        <h2 class="subtitle is-5">dipl. inž. rač. in inf. (UN)</h2>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box" style="height: 100%">
            <h2 class="subtitle is-4 has-text-centered">Kontakt</h2>
            <div>
              <a
                href="mailto:jakob.marusic17@gmail.com"
                target="_blank"
                style="margin-right: 1vw"
              >
                <b-icon icon="email-outline" style="margin-right: 1vw" />
                jakob.marusic17 {at} gmail.com
              </a>
            </div>
            <div>
              <a href="https://facebook.com/jakmar17" target="_blank">
                <b-icon icon="facebook" style="margin-right: 1vw" />
                Facebook
              </a>
            </div>
            <div>
              <a href="https://github.com/jakmar17" target="_blank">
                <b-icon icon="github" style="margin-right: 1vw" />
                GitHub
              </a>
            </div>
            <!-- <div>
              <a
                href="https://www.linkedin.com/in/jakob-maru%C5%A1i%C4%8D-2060461b4/"
                target="_blank"
              >
                <b-icon icon="linkedin" style="margin-right: 1vw" />
                LinkedIn
              </a>
            </div> -->
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle is-4 has-text-centered">Življenjepis</h2>
            <nuxt-link
              :to="{ path: '/cv', hash: 'school' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="school-outline"
                size="is-small"
              >
                Izobrazba
              </b-button>
            </nuxt-link>
            <nuxt-link
              :to="{ path: '/cv', hash: 'work' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="briefcase-outline"
                size="is-small"
              >
                Delovne izkušnje
              </b-button>
            </nuxt-link>
            <nuxt-link
              :to="{ path: '/cv', hash: 'projects' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="server-network"
                size="is-small"
              >
                Osebni projekti
              </b-button>
            </nuxt-link>
            <!-- <nuxt-link
              :to="{ path: '/cv', hash: 'knowledge' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="apple-safari"
                size="is-small"
              >
                Znanja
              </b-button>
            </nuxt-link> -->
          </div>
        </div>
      </div>
      <div style="margin-top: 3vh"></div>
    </div>

    <div class="cv-container">
      <!-- <CvExperienceCard
        v-for="w of knowledge"
        :key="w.what"
        :year="w.year"
        :what="w.what"
        :where="w.where"
        :description="w.description"
      ></CvExperienceCard> -->
      <div class="box">
        <p>
          Največ znanja imam iz razvoja spletnih (fullstack) aplikacij. Na tem
          področju imam poleg svojih lastnih projektov (MarelaBudget, spletna
          aplikacija v okviru diplomske naloge...) tudi približno leto dni
          izkušenj v okviru študentskega dela. Večina apliakcij je razvita z
          uporabo ogrodja Angular na čelnem delu in ogrodja Spring Boot na
          zalednem delu sistema. V zadnjem času preizkušam NuxtJS za razvoj JAM
          stack aplikacij.
        </p>
        <p>
          Poleg razvoja zalednih in čelnih aplikacij imam izkušnje z uporabo
          relacijskih baz. V lastnih projektih povečini uporablja baze MySQL,
          MariaDB ali PostgreSQL, v okviru študentskih del pa sem razvijal na
          bazi Oracle (vključno z indeksi, procedurami in ostalimi naprednimi
          funkcijami).
        </p>
        <p style="margin: 0">
          Obenem razvijam mobilne aplikacije (MarelaApp) v Flutter-ju, v
          preteklosti pa tudi v ogrodju Ionic. Manjše projekte sem razvijal tudi
          v tehnologijah kot so: Python, NestJS, bash...
        </p>
      </div>
    </div>

    <h1 id="school" class="cv-title">Izobrazba</h1>
    <div class="cv-container">
      <CvExperienceCard
        v-for="s of education"
        :key="s.title"
        :year="s.startDate + ' - ' + s.endDate"
        :what="s.title"
        :where="s.subtitle"
        :description="s.description"
      ></CvExperienceCard>
    </div>

    <h1 id="work" class="cv-title">Delovne izkušnje</h1>
    <div class="cv-container">
      <CvExperienceCard
        v-for="w of work"
        :key="w.title"
        :year="w.date"
        :what="w.title"
        :where="w.company"
        :description="w.description"
      ></CvExperienceCard>
    </div>

    <h1 id="projects" class="cv-title">Osebni projekti</h1>
    <div class="cv-container">
      <!-- <CvExperienceCard
        v-for="w of projects"
        :key="w.id"
        :year="w.year"
        :what="w.project_name"
        :where="w.where"
        :description="w.description_short"
      ></CvExperienceCard> -->

      <CvExperienceCard
        v-for="w of projects"
        :key="w.what"
        :year="w.year"
        :what="w.project_name"
        :where="w.project_subtitle"
        :description="w.description_short"
        :link="w.showDetailPage ? '/project/' + w.project_name : null"
      ></CvExperienceCard>
    </div>

    <!-- <h1 id="knowledge" class="cv-title">Znanja</h1> -->
    
  </main>
</template>


<script>
import { createSEOMeta } from '/utils/seo'

export const knowledge = [
  {
    what: 'Java',
    // where: '1,5 leto izkušenj v realnem sektorju',
    description:
      'Objektni razvoj, trinivojska arhitektura in razvoj REST okolji (KumuluzEE, Spring, Spring Boot)',
  },
  {
    what: 'Angular (Typescript)',
    // where: '1,5 leto izkušenj v realnem sektorju',
    description:
      'Razvoj kompleksnih SPA aplikacij, pridobivanje podatkov iz REST strežnikov',
  },
  {
    what: 'Relacijske podatkovne baze (MySQL, PostgreSQL, Oracle, MariaDB)',
    // where: '1,5 leto izkušenj v realnem sektorju',
    description:
      'Načrtovanje, izdelava in upravljanje podatkovne baze za shranjevanje in upravljanje podatkov',
  },
  {
    what: 'Flutter',
    description: 'Izdelava hibridnih aplikacij za mobilni sistem Android',
  },
  {
    what: 'HTML, CSS, JavaScript (NodeJS)',
    // where: '1,5 leto izkušenj v realnem sektorju',
    description:
      'Razvoj REST strežnikov (Express) in frontend razvoj spletnih aplikacij',
  },
  {
    what: 'NuxtJs',
    description: 'Razvoj statični spletni strani z uporabo JAM stacka',
  },
  {
    what: 'MongoDB',
    description:
      'Izdelava podatkovne baze za shranjevanje in upravljanje podatkov REST strežnika (Express in Mongoose)',
  },
  {
    what: 'Ionic framework (Ionic, Angular, Capacitor)',
    description: 'Razvoj hibridnih aplikacij za splet in Android',
  },
  {
    what: 'WordPress',
    description: 'Upravljanje spletnih mest',
  },
  {
    what: 'Adobe Photoshop, Indesign, Illustrator',
    description:
      'Izdelava in oblikovanje tisknin ter objav za spletna mesta in socialna omrežja',
  },
]

export default {
  created() {
    this.knowledge = knowledge
  },
  data() {
    return {}
  },
  async asyncData({ $strapi }) {
    let projects = {}
    let education = {}
    let work = {}
    try {
      projects = await $strapi.find('projects', '_sort=year:DESC')
      work = await $strapi.find('cv-works', '_sort=id:DESC')
      education = await $strapi.find('cvs', '_sort=id:DESC')
    } catch (error) {
      console.error(error)
    }

    return { projects, education, work }
  },
  async mounted() {
    try {
      this.projects = await this.$strapi.find('projects', '_sort=year:DESC')
      this.work = await this.$strapi.find('cv-works', '_sort=id:DESC')
      this.education = await this.$strapi.find('cvs', '_sort=id:DESC')
    } catch (error) {
      console.error(error)
    }
  },
  head() {
    return {
      title: 'Jakobov življenjepis',
      meta: [
        ...createSEOMeta({
          title: 'Jakobov življenjepis',
          description:
            'V letu 2021 diplomirani inženir rač. in inf. (UN) sem večino izkušenj pridobil bodisi iz lastnih projektov, bodisi študentskega dela. Največ izkušenj na realnih projektih imam z Javo (Spring Boot) in Angularjem.',
          url: 'https://jakob.marela.team/cv',
          image: 'https://jakob.marela.team/_nuxt/img/avatar.127b104.png',
        }),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

p {
  margin-bottom: 1vh;
}

.cv-title {
  @extend .title, .is-3, .has-text-primary;
  margin-left: 1vw;
  margin-right: 1vw;
}

.cv-container {
  margin: 0 2vw 4vh 2vw;
}
</style>