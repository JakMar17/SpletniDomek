<template>
  <main>
    <div class="container">
      <div class="columns">
        <div class="column is-8-tablet" style="height: 100vh; display: flex; flex-direction: column; justify-content: center; z-index: 2">
          <div style="margin-bottom: 4rem">
            <h1 class="main_title">Jaz, Jakob.</h1>
            <div style="display: flex; gap: 1rem; margin-top: 1rem">
              <a href="https://facebook.com/jakmar17" target="_blank" class="contact__button">
                <i class="ri-facebook-circle-line"></i>
              </a>
              <a href="mailto:jakob.marusic17@gmail.com" target="_blank" class="contact__button">
                <i class="ri-mail-open-line"></i>
              </a>
              <a href="http://github.com/jakmar17" class="contact__button">
                <i class="ri-github-line"></i>
              </a>
            </div>
          </div>
          <div class="glass_card">
            <div class="glass_card__body">

            <span class="glass_card__icon">
              <i class="ri-computer-line"></i>
            </span>
              <div>
                <h2 class="glass_card__title">Programer</h2>
                <div class="glass_card__content" style="display: flex; justify-content: space-between; gap: 1rem">
                  <span>Angular</span>
                  <span style="color: rgba(255,255,255,0.5)">|</span>
                  <span>Nuxt</span>
                  <span style="color: rgba(255,255,255,0.5)">|</span>
                  <span>Java</span>
                  <span style="color: rgba(255,255,255,0.5)">|</span>
                  <span>Oracle</span>
                </div>
              </div>
            </div>
          </div>
          <div class="glass_card">
            <span class="glass_card__icon">
              <i class="ri-megaphone-line"></i>
            </span>
            <div>
              <h2 class="glass_card__title">Predstavnik</h2>
              <h3 class="glass_card__content">
                Član občinskega sveta, sveta krajevne skupnosti in študentskega sveta stanovalcev
              </h3>
            </div>
          </div>
          <div class="glass_card">
            <span class="glass_card__icon">
              <i class="ri-briefcase-4-line"></i>
            </span>
            <div>
              <h2 class="glass_card__title">Življenjepis</h2>
              <h3 class="glass_card__content">
                Od prvih šolskih dni do izvolitve kot najmlajši občinski svetnik
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="selfie" src="@/assets/images/jaz_baraba.png"/>
  </main>
</template>

<script allowJs="true">
// import {createSEOMeta} from '/utils/seo'

export default {
  data() {
    return {
      carousels: [
        {text: "Slide 1", color: "primary"},
        {text: "Slide 2", color: "info"},
        {text: "Slide 3", color: "success"},
        {text: "Slide 4", color: "warning"},
        {text: "Slide 5", color: "danger"}
      ],
      dormLife: {
        title: "Življenje v domu",
        paragraph: "Ena izmed nalog študentskega sveta stanovalcev je skrb za prijetno, dinamično in kulturno bivanje v naših skupnih domovih.",
        primaryImage: "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
        secondRow: [
          "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
          "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
        ],
        thirdRow: [
          "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
          "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
          "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
        ]
      }
    };
  },
  methods: {
    dorm() {
      return dorm;
    },
    onClick() {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.main_title {
  font-family: 'Caveat', serif;
  font-size: 4rem;
  font-weight: 800;
  color: white;
}

.glass_card {
  @extend .box, .glass, .has-radius-border, .is-hoverable;
  font-family: 'Lato';
  color: white;

  &__body {
  display: flex;
  gap: 2rem;
  align-items: center;
    background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
    );
    background-position: 50% 50%;
    background-size: 1.1rem 1.1rem;
  }

  &__icon {
    visibility: hidden;
    font-size: 2rem;
    color: rgba(255,255,255,0.5);
  }

  transition: visibility 0.5s;
  &:hover &__icon {
    visibility: visible;
  }

  &__title {
    font-weight: 200;
    letter-spacing: 0.07rem;
    font-size: 2.5rem;
  }

  &__content {
    margin-left: 0.25rem;
  }
}

.contact__button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;


  background: rgba(142, 208, 172, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  aspect-ratio: 1 / 1;
  width: 3em;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 500ms;
  &:hover {
    background: rgba(142, 208, 172, 0.2);
  }


  i {
    color: white;

    font-size: 1.75em;
  }
}

.selfie {
  max-height: 100vh;
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
}


.glass {
  /* From https://css.glass */
  background: rgba(#297EA6, 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);

  transition: background-color 500ms;
  &:hover {
    background: rgba(#297EA6, 0.2);
  }
}

main {
  min-height: 100vh;
  padding-top: 0;
}

.content {
  &__background {
    padding-top: 2em;
  }
}

.citation {
  &__avatar {
    height: fit-content;
    border-radius: 50%;
  }

  &__body {
    border-left: 1px solid;
    padding-left: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  &__signature {
    font-style: italic;

    &_name {
      font-weight: 600;
    }
  }
}

</style>
