<template>
  <div class="box">
    <h4 class="subtitle is-4 is-clickable" @click="pokaziFormo()">
      Dodaj komentar
    </h4>
    <div v-if="pokazi">
      <div class="field">
        <label class="label">Vzdevek</label>
        <div class="control">
          <input
            v-model="vzdevekInput"
            class="input"
            type="text"
            placeholder="Janez Novak"
          />
        </div>
      </div>
      <div v-if="citiranKomentar" class="field">
        <label class="label columns is-vcentered">
          <div
            @click="clearCitiranKomentar()"
            class="column no-bottom-margin is-narrow"
          >
            <b-tooltip label="Ne citiraj" position="is-right" class="is-danger">
              <b-icon icon="close" size="is-small" type="is-danger"> </b-icon>
            </b-tooltip>
          </div>
          <div class="column no-bottom-margin">Citiran komentar</div>
        </label>

        <div class="control">
          <textarea
            class="textarea"
            v-model="citiranKomentar.telo"
            disabled
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Komentar</label>
        <div class="control">
          <textarea
            v-model="komentarInput"
            class="textarea"
            placeholder="Komentar"
          ></textarea>
        </div>
      </div>
      <div class="buttons">
        <b-button
          @click="postKomentar()"
          class="button is-primary is-outlined is-fullwidth"
          label="Objavi komentar"
          icon-left="send"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { postKomentar } from '~/api/java-backend/komentarji'

export default {
  props: {
    slug: {},
    citiranKomentar: {},
  },
  data() {
    return {
      pokazi: false,
      vzdevekInput: '',
      komentarInput: '',
    }
  },
  mounted() {
    if (process.browser)
      if (localStorage.getItem('vzdevek'))
        this.vzdevekInput = localStorage.getItem('vzdevek')
  },
  methods: {
    pokaziFormo() {
      this.pokazi = true
    },
    async postKomentar() {
      if (!this.vzdevekInput || this.vzdevekInput.length === 0) {
        this.$swal('', 'Vzdevek mora biti izpolnjen', 'error')
        return
      }

      if (!this.komentarInput || this.komentarInput.length === 0) {
        this.$swal('', 'Komentar ne sme biti prazen', 'error')
        return
      }

      const komentar = {
        vzdevek: this.vzdevekInput,
        telo: this.komentarInput,
        slug: this.slug,
      }

      if (this.citiranKomentar) {
        komentar.citiranId = this.citiranKomentar.komentarId
      }

      const data = await postKomentar(this.$axios, komentar)
      this.cleanFileds()
      this.$parent.komentarji = [data].concat(this.$parent.komentarji)

      this.$swal('', 'Komentar je bil objavljen', 'success')
    },
    clearCitiranKomentar() {
      this.citiranKomentar = null
    },
    cleanFileds() {
      this.pokazi = false
      //this.vzdevekInput = ''
      this.komentarInput = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.no-bottom-margin {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>