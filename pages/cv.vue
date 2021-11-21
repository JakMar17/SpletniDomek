<template>
  <main class="container" style="padding: 2vh 1vw 4vh 1vw">
    <nuxt-link to="/">
      <b-icon icon="arrow-left"></b-icon>
    </nuxt-link>

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
                href="mailto:jakob@marela.team"
                target="_blank"
                style="margin-right: 1vw"
              >
                <b-icon icon="email-outline" style="margin-right: 1vw" />
                jakob {at} marela.team
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
              v-scroll-to="{ el: '#school' }"
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
              v-scroll-to="{ el: '#work' }"
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
              v-scroll-to="{ el: '#projects' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="server-network"
                size="is-small"
              >
                Osebni projekti
              </b-button>
            </nuxt-link>
            <nuxt-link
              :to="{ path: '/cv', hash: 'knowledge' }"
              v-scroll-to="{ el: '#knowledge' }"
            >
              <b-button
                class="is-fullwidth"
                icon-left="apple-safari"
                size="is-small"
              >
                Znanja
              </b-button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div style="margin-top: 3vh"></div>
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
      ></CvExperienceCard> -->¸

      <CvExperienceCard
        v-for="w of projects"
        :key="w.what"
        :year="w.year"
        :what="w.what"
        :where="w.where"
        :description="w.description"
      ></CvExperienceCard>
    </div>

    <h1 id="knowledge" class="cv-title">Znanja</h1>
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
  </main>
</template>


<script>
import { createSEOMeta } from '/utils/seo'

export const projects = [
  {
    year: '2021 (v razvoju)',
    what: 'ExchangeApp',
    where:
      'Fullstack spletna aplikaicja (Angular, Spring Boot, MariaDB, MongoDB)',
    description:
      'Spletna aplikacija kreirana v okviru diplomske naloge, ki študentom omogoča izmenjevanje testnih primerov za preverjanje pravilnosti programov.',
  },
  {
    year: '2020',
    what: 'MarelaApp',
    where: 'Flutter mobilna aplikacija, Spring Boot, MariaDB',
    description:
      'Mobilna aplikacija za pregled vremenskih razmer in napovedi v Sloveniji. Aplikacija pridobi podatke iz ARSO. Aplikacija je dostopna na Google Play',
  },
  {
    year: '2020',
    what: '@AppMarela Twitter bot',
    where: 'Python',
    description:
      'Twitter bot, ki avtomatsko odgovarja na tvite v katerih je označen in so povezani z vremenskim stanjem v Sloveniji.',
  },
  {
    year: '2020',
    what: 'Corona Tracker',
    where: 'AngularSPA',
    description:
      'Spletna storitev za pregled in analizo stanja širjenja novega koronavirusa. Projekt je odprtokoden in dostopen na GitHub-u',
  },
  {
    year: '2020',
    what: 'SimplyNote',
    where: 'Hibridna aplikacija (Angular, Capacitor, Ionic)',
    description:
      'Mobilna aplikacija za shranjevanje in urejanje beležk ter zapiskov.',
  },
  {
    year: '2020',
    what: 'Rise & Shine',
    where: 'Hibridna aplikacija (Angular, Capacitor, Ionic)',
    description:
      'Mobilna aplikacija za prikaz časa sončnega vzhoda in zahoda na trenutni lokaciji. Aplikacija je odprtokodna (GitHub) in na voljo na storitvi Google Play za prenos.',
  },
  {
    year: '2019',
    what: 'ATT - Automatic Testing Tool',
    where: 'Bash skripta za avtomatsko testiranje kode',
    description:
      'Skripta za avtomatsko testiranje izhodnih podatkov glede na podane vhodne podatke in testne primere. Projekt je odprtokoden in na voljo na GitHub-u.',
  },
]

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
    this.projects = projects
  },
  data() {
    return { projects: {} }
  },
  async asyncData({ $strapi }) {
    // let projects = {}
    let education = {}
    let work = {}
    try {
      // projects = await $strapi.find('projects')
      this.work = await this.$strapi.find('cv-works', '_sort=id:DESC')
      education = await $strapi.find('cvs', '_sort=id:DESC')
    } catch (error) {
      console.error(error)
    }

    console.log(work)

    return { projects, education, work }
  },
  async mounted() {
    try {
      // this.projects = await this.$strapi.find('projects')
      this.work = await this.$strapi.find('cv-works', '_sort=id:DESC')
      this.education = await this.$strapi.find('cvs', '_sort=id:DESC')
    } catch (error) {
      console.error(error)
    }

    console.log(this.work)
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