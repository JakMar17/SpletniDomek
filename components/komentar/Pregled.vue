<template>
  <div class="columns">
    <div class="column is-1 is-2-fullhd"></div>
    <div class="column is-10 is-8-fullhd">
      <h3 class="title is-2">Komentarji</h3>
      <hr />
      <KomentarDodaj :slug="slug" :citiranKomentar="citiranKomentar" />
      <div class="empty"></div>
      <div v-if="komentarji">
        <div class="box" v-for="(komentar, index) of komentarji" :key="index">
          <!--  -->
          <div class="columns">
            <div class="column">
              <div class="columns is-vcentered">
                <div class="column">
                  <p class="vzdevek">{{ komentar.vzdevek }}</p>
                  <p class="help">{{ komentar.kreiran | formatDate }}</p>
                </div>
                <div
                  @click="citirajKomentar(komentar)"
                  class="column is-narrow"
                >
                  <b-tooltip
                    label="Citiraj komentar"
                    position="is-left"
                    class="is-info"
                  >
                    <b-icon
                      icon="reply-all-outline"
                      type="is-primary"
                      class="is-clickable"
                    >
                    </b-icon>
                  </b-tooltip>
                </div>
              </div>
              <div class="komentar">
                <div v-if="komentar.citiran" class="citat">
                  {{ komentar.citiran }}
                </div>
                {{ komentar.telo }}
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <div class="column is-1 is-2-fullhd"></div>
  </div>
</template>

<script>
import { getKomentarjiZaNovico } from '~/api/java-backend/komentarji'

export default {
  props: {
    slug: { required: true },
  },
  data() {
    const komentarji = []
    return { komentarji, citiranKomentar: null }
  },
  async mounted() {
    // this.komentarji = await getKomentarjiZaNovico(this.$axios, this.slug)
  },
  methods: {
    citirajKomentar(komentar) {
      this.citiranKomentar = komentar
    },
  },
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.vzdevek {
  @extend .has-text-primary;
  font-size: 130%;
  margin: 0;
  margin-bottom: 0;
  padding: 0;
}

.komentar {
  margin-top: 1vh;
  padding-left: 0.5vw;
  margin-left: 1vw;
  border-left: 0.25vw solid $primary;
}

.empty {
  height: 2vh;
}

.citat {
  @extend .notification;
  padding-top: 0;
  padding-bottom: 0;
}
</style>