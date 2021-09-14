<template>
  <div class="custom-box">
    <h4 class="subtitle is-6" style="padding-bottom: 1vh">{{ year }}</h4>

    <h2 class="title is-5">
      {{ what }}
    </h2>
    <h3 class="subtitle is-5">
      {{ where }}
    </h3>
    <p>
      {{ description }}
    </p>
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
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.columns-no-padding {
  @extend .columns;
  .column {
    padding-top: 0;
  }
}

.custom-box {
  @extend .box, .container;
  p {
    font-size: 16px;
  }
}
</style>