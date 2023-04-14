<template>
  <section>
    <p class="subtitle" :class="centeredTitle">
      {{ suptitle }}
    </p>
    <h1 class="main-title" :class="centeredTitle">
      {{ title }}
    </h1>
    <p class="subtitle" :class="centeredTitle">
      {{ subtitle }}
    </p>
    <p :class="centeredTitle">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    center: { default: false },
    suptitle: String,
    title: String,
    subtitle: String,
    imageUrl: String,
    description: String,
  },
  computed: {
    centeredTitle() {
      return this.center ? 'has-text-centered' : ''
    },
    backgroundSlika() {
      return this.imageUrl ?? '@/assets/images/svgs/squares_bg.svg'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

section {
  background-image: url('~/assets/images/svgs/squares_bg.svg');
  padding: 7vh 2vw 6vh 2vw;
}

.main-title {
  @extend .title, .is-2, .has-text-left;
  color: white;
  font-weight: 600;
  text-align: left;
}

.subtitle {
  color: white;
  font-weight: 300;
}
</style>
