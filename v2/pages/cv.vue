<template>
  <NavigationMenu style="z-index: 100" ref="navMenu" v-if="showMenu" class="animate__animated animate__fadeInDown"></NavigationMenu>
  <div class="wrapper">
    <NavigationMenuButton @click="toggleMenu" class="is-hidden-touch"/>
    <div class="main_content__wrapper">
      <h1 class="main_content__title">Jaz, Jakob</h1>
      <main class="columns">
        <div class="column is-4 cv_intro ">
          <div class="animate__animated animate__fadeIn">
            Živjo - sem Jakob, opajc, ki ga je izobraževalna in profesionalna pot zanesla v Ljubljano, kjer trenutno živim in delam. Zaposlen sem kot razvijalec spletnih aplikacij, hkrati pa sem v Študentskem domu Ljubljana predstavnik študentov, član Krajevne skupnosti Opatje selo in najmlajši občinski svetnik v Občini Miren-Kostanjevica.
          </div>
        </div>
        <div class="column cv_cards__wrapper">
          <CardSummary
              class="animate__animated animate__backInRight animation__delay--200"
              label="Izobrazba"
              icon="ri-graduation-cap-line"
              contentBig="diplomirani inženir računalništva in informatike (UN)"
              content-small="2021 - Univerza v Ljubljani, Fakulteta za računalništvo in informatiko"
          />

          <CardSummary
              class="animate__animated animate__backInRight animation__delay--400"
              label="Trenutna zaposlitev"
              icon="ri-building-2-line"
              contentBig="razvijalec spletnih poslovnih sistemov (frontend)"
              content-small="2022 - Medius d.o.o."
          />

          <CardSummary label="Ostale funkcije" icon="ri-megaphone-line"
                       class="animate__animated animate__backInRight animation__delay--600"
          >
            <LinkInternalUnderline label="Občinski svet Občine Miren-Kostanjevica in KS Opatje selo"/>
            <LinkInternalUnderline label="Študentski svet stanovalcev ŠDL"/>
          </CardSummary>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/glass.scss';

.wrapper {
  @extend .container;
  padding-top: 5rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.main_content {
  &__wrapper {
    padding-bottom: 2rem;
  }

  &__title {
    font-family: 'Caveat', serif;
    font-size: 4rem;
    font-weight: 800;
    color: white;
  }
}

.cv {
  &_intro {
    margin-top: 2rem;
    color: white;
    font-weight: 300;
    font-size: 1.5rem;
  }

  &_cards {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 2rem;
    }
  }
}

main {
  padding-top: 0;
}


</style>

<script>
import CardSummary from "~/components/card/CardSummary.vue";
import LinkInternalUnderline from "~/components/link/LinkInternalUnderline.vue";
import NavigationMenuButton from "~/components/navigation/NavigationMenuButton.vue";

export default {
  components: {
    CardSummary,
    LinkInternalUnderline,
    NavigationMenuButton
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      if (this.showMenu) {
        this.$refs.navMenu.$el.classList.add('animate__fadeOutUp');
        this.$refs.navMenu.$el.addEventListener('animationend', () => {
          this.showMenu = !this.showMenu;
        });
      } else {
          this.showMenu = !this.showMenu;
      }
    }
  }
}

</script>