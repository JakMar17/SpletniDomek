<template>
  <div class="custom-box">
    <h3 class="subtitle is-6">{{ year }}</h3>
    <h2 class="columns-no-padding is-vcentered">
      <div class="column is-narrow">
        <div class="title is-5">
          {{ what }}
        </div>
      </div>
      <div class="column is-narrow">
        <div class="subtitle is-5">
          {{ where }}
        </div>
      </div>
    </h2>
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