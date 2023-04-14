import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY HH:mm')
  }
})

Vue.filter('blogPostFilter', function (array, filter) {
  if (!filter) return array
  if (array) {
    filter = filter.toLowerCase()
    return array.filter(
      (e) =>
        e.title.toLowerCase().includes(filter) ||
        e.excerpt.toLowerCase().includes(filter)
    )
  }
})
