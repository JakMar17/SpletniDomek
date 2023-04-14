<template>
  <div class="shadow image-card is-expended">
    <div v-if="link != null">
      <NuxtLink :to="link">
        <img :src="getImgUrl()" alt="" />
        <h4 class="subtitle is-6">{{ year }}</h4>
        <h3 class="title is-5">{{ what }}</h3>
        <!-- <h3 class="subtitle is-6">
          {{where}}
      </h3> -->
        <p>{{ description }}</p>
      </NuxtLink>
    </div>
    <div v-if="link == null">
      <img :src="getImgUrl()" alt="" />
      <h4 class="subtitle is-6">{{ year }}</h4>
      <h3 class="title is-5">{{ what }}</h3>
      <!-- <h3 class="subtitle is-6">
          {{where}}
      </h3> -->
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    center: { default: false },
    year: String,
    what: String,
    where: String,
    description: String,
    pics: Array,
    link: String | null,
  },
  methods: {
    getImgUrl() {
      if (this.pics == null || this.pics.length === 0) {
        return 'https://avatars.githubusercontent.com/u/34716555?v=4'
      } else {
        const url = this.$config.strapiUrl + this.pics[0].url
        console.log(url)
        return url
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

// Full tutorial coming soon!

.shadow {
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1),
    0 0px 0 1px rgba($scheme-invert, 0.02);
}

.image-card {
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-blend-mode: overlay;

  background-color: #fff;
  border-radius: 0.5vh;
  padding-bottom: 1vh;
  background-image: linear-gradient(
    var(--card-gradient),
    rgba(255, 255, 255, 0.5) max(9.5vh, 27vh)
  );
  overflow: hidden;

  width: 100%;

  img {
    border-radius: 0.5vh 0.5vh 0 0;
    width: 100%;
    object-fit: cover;
    // height: max(10vh, 25vh);
    max-height: max(10vh, 30vh);
    aspect-ratio: 4/3;
    mix-blend-mode: var(--card-blend-mode);
    // filter: grayscale(100);

    ~ * {
      margin-left: 1vh;
      margin-right: 1vh;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }
}

.image-card h3 {
  margin-top: 1vh;
  font-size: 1.5vh;
}

.image-card a {
  color: inherit;
}
</style>
