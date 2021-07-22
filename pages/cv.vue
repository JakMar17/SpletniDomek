<template>
  <main class="container" style="padding-top: 2vh; padding-bottom: 4vh">
    <nuxt-link to="/">
      <b-icon icon="arrow-left"></b-icon>
    </nuxt-link>

    <div style="padding: 3vh 5vw 0 5vw">
      <div class="has-text-centered" style="margin-bottom: 3vh">
        <h1 class="title is-3">Jakob Marušič</h1>
        <h2 class="subtitle is-5">gimnazijski maturant</h2>
        <!-- <h2 class="subtitle is-5">dipl. inž. rač. in inf. (UNI)</h2> -->
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

    <h1 id="school" class="title is-3 has-text-primary">Izobrazba</h1>
    <div style="margin: 0 2vw 6vh 2vw">
      <CvExperienceCard
        v-for="s of school"
        :key="s.year"
        :year="s.year"
        :what="s.what"
        :where="s.where"
        :description="s.description"
      ></CvExperienceCard>
    </div>

    <h1 id="work" class="title is-3 has-text-primary">Delovne izkušnje</h1>
    <div style="margin: 0 2vw 4vh 2vw">
      <CvExperienceCard
        v-for="w of work"
        :key="w.what"
        :year="w.year"
        :what="w.what"
        :where="w.where"
        :description="w.description"
      ></CvExperienceCard>
    </div>

    <h1 id="projects" class="title is-3 has-text-primary">Osebni projekti</h1>
    <div style="margin: 0 2vw 4vh 2vw">
      <CvExperienceCard
        v-for="w of projects"
        :key="w.what"
        :year="w.year"
        :what="w.what"
        :where="w.where"
        :description="w.description"
      ></CvExperienceCard>
    </div>

    <h1 id="knowledge" class="title is-3 has-text-primary">Znanja</h1>
    <div style="margin: 0 2vw 4vh 2vw">
      <CvExperienceCard
        v-for="w of knowledge"
        :key="w.what"
        :year="w.year"
        :what="w.what"
        :where="w.where"
        :description="w.description"
      ></CvExperienceCard>
    </div>
  </main>
</template>


<script>
export const school = [
  {
    year: '2017 - danes',
    what: 'Fakulteta za računalništvo in informatiko',
    where: 'Univerza v Ljubljani',
    description:
      'Študent tretjega letnika dodiplomskega univerzitetnega programa računalništvo in informatiko.',
  },
  {
    year: '2013 - 2017',
    what: 'Gimnazija in zdravstvena šola',
    where: 'Šolski center Nova Gorica',
    description:
      'Program tehniške gimnazije sem vsa leta zaključil s prav dobrim uspehom. Zaključek šolanja z opravljeno splošno maturo in pridobljenim nazivom gimnazijski maturant.',
  },
]

export const work = [
  {
    year: '2021',
    what: 'IT podpora (poletna praksa)',
    where: 'Mahle d.o.o.',
    description:
      'Delo je vljučevalo skrb za računalniške sisteme znotraj mreže ter pomoč uporabnikom.',
  },
  {
    year: '2020 - 2021',
    what: 'Razvoj programske opreme in vzdrževanje poslovne informatike',
    where: 'Omega Consult d.o.o.',
    description:
      'Delo vključuje razvoj novih in posodabljanje obstoječih informacijskih storitev za naročnike. Uporabljene tehnologije: HTML, CSS, JS (Angular), Java, Oracle in MySQL podatkovna baza. Razvoj produktov Gradbišča za DRSI in CRV izpiti za AVP.',
  },
  {
    year: '2020',
    what: 'iSure ŠIPK projekt',
    where: 'Varni na internetu & FRI',
    description:
      'Namen projekta je postavitev platforme za množičen interaktiven tečaj nemenjen osnovno in srednješolcem, ki si želijo spoznati orodja in uporabno vrednost mikrokontrolerjev.',
  },
  {
    year: '2019',
    what: 'Razvoj poslovne informatike (poletna praksa)',
    where: 'Mahle d.o.o.',
    description:
      'Delo je vključevalo razvoj novih in posodabljanje obstoječih storitev v intranetu podjetja. Uporabljene tehnologije: HTML, CSS, JS, Java, Oracle podatkovna baza.',
  },
  {
    year: '2018 - danes',
    what: 'Upravljanje spletne strani in spletne podobe podjetja',
    where: 'Špacapanova hiša',
    description:
      'Delo vključuje oblikovanje spletnih vsebin (Photoshop, Indesign, Illustrator) za socialna omrežja in oblikovanje spletne strani ter njeno posodabljanje (Wordpress).',
  },
]

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
    this.work = work
    this.school = school
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
</style>