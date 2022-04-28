<template>
  <main class="container" style="padding: 0vh 1vw 4vh 1vw">
    <div style="padding: 3vh 5vw 0 5vw">
      <div>
        <div class="has-text-centered" style="margin-bottom: 3vh">
          <h1 class="title is-3">Jakob Marušič</h1>
          <h2 class="subtitle is-5">dipl. inž. rač. in inf. (UN)</h2>
        </div>
        <div class="has-text-centered columns">
          <div class="column">
            <a href="mailto:jakob.marusic17@gmail.com" target="_blank">
              <b-icon icon="email-outline" style="margin-right: 1vw" />
              jakob.marusic17 {at} gmail.com
            </a>
          </div>
          <div class="column">
            <a href="https://facebook.com/jakmar17" target="_blank">
              <b-icon icon="facebook" style="margin-right: 1vw" />
              Facebook
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/jakmar17" target="_blank">
              <b-icon icon="github" style="margin-right: 1vw" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div style="margin-top: 3vh"></div>
    </div>

    <div class="cv-container">
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

    <!-- <div class="box"> -->
    <div>
      <b-tabs
        v-model="activeTab"
        position="is-centered"
        class="block"
        style="padding-top: 3vh"
      >
        <b-tab-item label="Izobrazba" icon="school-outline">
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
        </b-tab-item>
        <b-tab-item label="Delovne izkušnje" icon="briefcase-outline">
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
        </b-tab-item>
        <b-tab-item label="Osebni projekti" icon="laptop">
          <div class="cv-container">
            <div class="columns is-multiline is-tablet">
              <div
                class="column is-4 is-flex"
                v-for="w of projects"
                :key="w.what"
              >
                <CardImage
                  :year="w.year"
                  :what="w.project_name"
                  :where="w.project_subtitle"
                  :description="w.description_short"
                  :pics="w.pics"
                  :link="w.showDetailPage ? '/project/' + w.project_name : null"
                ></CardImage>
              </div>
            </div>
            <!-- <CvExperienceCard
              v-for="w of projects"
              :key="w.what"
              :year="w.year"
              :what="w.project_name"
              :where="w.project_subtitle"
              :description="w.description_short"
              :link="w.showDetailPage ? '/project/' + w.project_name : null"
            ></CvExperienceCard> -->
          </div>
        </b-tab-item>
      </b-tabs>
    </div>

    <!-- <ul class="card-wrapper">
  <li class="card">
    <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    <h3><a href="">A Super Wonderful Headline</a></h3>
    <p>Lovh ipsum sit dolor amit</p>
  </li>
  <li class="card">
    <img src='https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    <h3><a href="">What a Fantabulous Title!</a></h3>
    <p>Lovh ipsum sit dolor amit</p>
  </li>
  <li class="card">
    <img src='https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''>
    <h3><a href="">Positively Terrific Title</a></h3>
    <p>Lovh ipsum sit dolor amit</p>
  </li>
</ul> -->
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
    const tab = this.$route.query?.tab
    if(tab != null && tab === 'projects') {
      this.activeTab = 2
    }
  },
  data() {
    return {
      activeTab: 0,
    }
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
