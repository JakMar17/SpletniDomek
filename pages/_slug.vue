<template>
  <main class="container" style="padding-top: 2vh">
    <div class="buttons">
      <nuxt-link style="margin-right: 1vw" to="/blog">
        <b-icon icon="arrow-left"></b-icon>
      </nuxt-link>
      <nuxt-link to="/">
        <b-icon icon="home"></b-icon>
      </nuxt-link>
    </div>
    <div class="columns" style="padding-top: 3vh">
      <div class="column is-1 is-2-fullhd"></div>
      <div class="column is-10 is-8-fullhd">
        <div class="box">
          <div class="glava">
            <h1 class="naslov">{{ post.title }}</h1>
            <h2 class="nadnaslov">{{ post.created_at | formatDate }}</h2>
            <img
              v-if="post.feature_image"
              style="padding-left: 4vw; padding-right: 4vw"
              alt="Background"
              :src="post.feature_image"
            />

            <hr />
          </div>

          <div class="post" v-html="post.html" />
          <hr />
          <div class="tags">
            <span class="tag" v-for="tag in post.tags" :key="tag.id">
              {{ tag.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="column is-1 is-2-fullhd"></div>
    </div>

    <!-- <KomentarPregled :slug="slug" /> -->
  </main>
</template>

<script>
import { getSinglePost } from '../api/posts'
import { createSEOMeta } from '/utils/seo'

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    post.html = post.html.replaceAll('http://ghost', 'https://ghost')
    return { post: post, slug: params.slug }
  },
  mounted() {
    getSinglePost(this.post.slug).then((data) => {
      this.post = data
      this.post.html = this.post.html.replaceAll(
        'http://ghost',
        'https://ghost'
      )
      console.log(data)
    })
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        ...createSEOMeta({
          description: this.post.custom_excerpt,
          url: 'https://jakob.marela.team/' + this.post.slug,
          image: this.post.feature_image,
        }),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

main {
  margin: 3% 0 3% 0;
}

.glava {
  margin-top: 2vh;
  margin-left: 1vw;
}

.naslov {
  @extend .title;
  @extend .is-3;
  @extend .has-text-centered;
  font-weight: 600;
  letter-spacing: 0.05vw;
}

.nadnaslov {
  @extend .subtitle;
  @extend .is-6;
  @extend .has-text-centered;
  font-weight: 300;
  letter-spacing: 0.05vw;
}

.slikca {
  width: 100%;
  max-height: 40vh;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.post ::v-deep p {
  margin: 1.5vh 2vw 1.5vh 2vw;
  font-size: 16px;
}

.post ::v-deep blockquote {
  margin: 1vh 2vw 1vh 2vw;
  padding-left: 1vw;
  border-left: 4px solid $primary;
}

.post ::v-deep iframe {
  width: 100%;
  height: 60vh;
}

.post ::v-deep ul {
  margin: 1vh 2vw 1vh 2vw;
}

.post ::v-deep li {
  margin-left: 4vw;
  list-style-type: disc;
}

.post ::v-deep a {
  text-decoration: underline;
}

.post ::v-deep h1 {
  @extend .title, .is-2;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep h2 {
  @extend .title, .is-3;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep h3 {
  @extend .title, .is-4;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep h4 {
  @extend .subtitle, .is-4;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep h5 {
  @extend .subtitle, .is-5;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep h6 {
  @extend .subtitle, .is-6;
  color: $info;
  margin: 4vh 1vw 2vh 1vw;
}

.post ::v-deep figcaption {
  @extend .has-text-centered;
  font-style: italic;
  font-size: 80%;
}

.post ::v-deep figure {
  margin-top: 6vh;
  margin-bottom: 6vh;
}
</style>