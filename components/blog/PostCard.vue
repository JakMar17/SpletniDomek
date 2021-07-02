<template>
  <div>
    <nuxt-link
      :to="{ path: post.slug }"
      class="columns box element"
      style="margin-bottom: 5vh"
    >
      <div class="columns is-vcentered">
        <div v-if="post.feature_image" class="column is-3">
          <img
            alt="Background"
            class="hero-background is-transparent"
            :src="post.feature_image"
          />
        </div>
        <div class="column" style="width: 100%">
          <div>
            <h2 class="blog-post-title">{{ post.title }}</h2>
            <h3 class="blog-post-date">{{ post.created_at | formatDate }}</h3>
            <p>
              {{ post.excerpt }}
            </p>
            <hr style="margin: 1vh 0 1vh 0" />
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag.id" class="tag">
                {{ tag.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

main {
  margin-bottom: 2vh;
}

.paragraph {
  margin-bottom: 3vh;
}

.blog-post-title {
  @extend .title, .is-4, .has-text-left, .has-text-info, .is-clickable;
}

.blog-post-date {
  @extend .subtitle, .is-5, .has-text-left;
  margin-left: 1vw;
}
</style>