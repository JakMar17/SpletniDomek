<template>
  <div class="custom-box">
    <div v-if="link != null">
      <NuxtLink :to="link">
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
      </NuxtLink>
    </div>
    <div v-if="link == null">
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
    link: String | null,
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