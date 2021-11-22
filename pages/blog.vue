<template>
  <main class="container" style="padding-top: 2vh">
    <div style="padding: 3vh 5vw 2vh 5vw">
      <div class="has-text-centered" style="margin-bottom: 3vh">
        <h1 class="title is-3">Blog</h1>
      </div>
    </div>

    <ul style="padding: 3vh 3vw 3vh 3vw">
      <li v-for="post in posts" :key="post.id">
        <Blog-PostCard :post="post" />
      </li>
    </ul>
  </main>
</template>

<script>
import { getPosts } from '../api/posts'
export default {
  data() {
    return { posts: [], showSearchbar: false, searchInput: '' }
  },
  async asyncData() {
    const posts = await getPosts()
    return { posts }
  },
  mounted() {
    getPosts().then((data) => {
      this.posts = data
    })
  },
  methods: {
    toggleSearchBar() {
      this.showSearchbar = !this.showSearchbar
      console.log(this.showSearchbar)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

main {
  margin-bottom: 2vh;
}

.hero {
  margin-bottom: 3vh;
}

.paragraph {
  margin-bottom: 3vh;
}

.column {
  display: flex;
}

.blog-post-title {
  @extend .title, .is-4, .has-text-left, .has-text-info, .is-clickable;
}

.blog-post-date {
  @extend .subtitle, .is-5, .has-text-left;
  margin-left: 1vw;
}
</style>
