<template>
  <main class="container">
    <div style="padding: 3vh 5vw 2vh 5vw">
      <div class="has-text-centered" style="margin-bottom: 3vh">
        <h1 class="title is-3">{{ project.project_name }}</h1>
      </div>
    </div>

    <div class="container">
      <b-carousel
        :autoplay="false"
        :indicator-inside="false"
        :overlay="gallery"
        @click="switchGallery(true)"
      >
        <b-carousel-item
          class="is-center is-centered"
          v-for="(item, i) in project.pics"
          :key="i"
        >
          <a class="image has-text-centered is-center is-centered">
            <img
              :src="getImgUrl(i)"
              class="is-centered is-vcentered"
              style="
                max-height: 60vh;
                width: auto;
                margin-left: auto;
                margin-right: auto;
              "
            />
          </a>
        </b-carousel-item>
        <span
          v-if="gallery"
          @click="switchGallery(false)"
          class="modal-close is-large"
        />
        <!-- <template #indicators="props">
          <figure class="al image" style="max-height: 10vh; width: auto" :draggable="false">
            <img
              :draggable="false"
              :src="getImgUrl(props.i)"
              :title="props.i"
              style="max-height: 10vh; width: auto"
            />
          </figure>
        </template> -->
      </b-carousel>
    </div>

    <div class="container" style="padding: 5vh 0 5vh 0">
      <div class="columns is-multiline">
        <div class="column is-5-desktop is-4-widescreen is-12-tablet">
          <div class="box h-100">
            <table class="table">
              <tbody>
                <tr>
                  <td>Uporabljene tehnologije</td>
                  <td class="is-narrow has-text-right">
                    <b-icon
                      v-for="i of project.stack"
                      :key="i.id"
                      :icon="i.icon"
                    ></b-icon>
                  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td class="is-narrow has-text-right">
                    {{ project.status }}
                  </td>
                </tr>
                <tr>
                  <td>Začetek projekta</td>
                  <td class="is-narrow has-text-right">
                    {{ project.start_date }}
                  </td>
                </tr>
                <tr v-if="project.url">
                  <td>Produkcijska verzija</td>
                  <td class="is-narrow has-text-right">
                    <a :href="project.url" target="_blank">
                      <b-icon icon="web" />
                    </a>
                  </td>
                </tr>
                <tr v-if="project.url_source">
                  <td>Izvorna koda</td>
                  <td class="is-narrow has-text-right">
                    <a :href="project.url_source" target="_blank">
                      <b-icon icon="github" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="column">
          <div class="box h-100">
            <div v-html="$md.render(project.description)"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import { createSEOMeta } from '/utils/seo'

export default {
  data() {
    return {
      project: {},
      gallery: false,
    }
  },
  async asyncData({ params, $strapi }) {
    const slug = params.slug
    let project = {}
    try {
      project = await $strapi.find('projects', 'project_name=' + slug)
      project = project[0]
    } catch (error) {
      console.error(error)
    }

    return { slug, project }
  },
  async mounted() {
    try {
      const resp = await this.$strapi.find('projects', 'project_name=' + this.slug)
      this.project = resp[0]
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    getImgUrl(value) {
      return this.$config.strapiUrl + this.project.pics[value].url
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
        return document.documentElement.classList.add('is-clipped')
      } else {
        return document.documentElement.classList.remove('is-clipped')
      }
    },
  },
  head() {
    return {
      title: this.project.project_name,
      meta: [
        ...createSEOMeta({
          title: this.project.project_name,
          description: this.project.description,
          url: 'https://jakob.marela.team/project/' + this.project.project_name,
          image:
            this.project.pics != null && this.project.pics.length > 0
              ? this.$config.strapiUrl + this.project.pics[0].url
              : 'https://jakob.marela.team/_nuxt/img/avatar.127b104.png',
        }),
      ],
    }
  },
}
</script>

<style scoped>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}

hr {
  margin: 0;
  padding: 0;
}
</style>