const baseUrl = process.env.backendV2Url + 'blog/komentarji'

export async function getKomentarjiZaNovico(axios, slug) {
  let sessionId = null

  if (process.browser) {
    if (localStorage.getItem('sessionId'))
      sessionId = localStorage.getItem('sessionId')
  }

  const data = await axios.$put(
    baseUrl + (sessionId ? '?sessionId=' + sessionId : ''),
    { slug }
  )

  if (data.sessionId && process.browser) {
    localStorage.setItem('sessionId', data.sessionId)
  }
  return data.komentarji
}

export async function postKomentar(axios, komentar) {
  let sessionId = null

  if (process.browser) {
    if (localStorage.getItem('sessionId'))
      sessionId = localStorage.getItem('sessionId')

    localStorage.setItem('vzdevek', komentar.vzdevek)
  }

  if (sessionId) komentar.sessionId = sessionId

  const data = await axios.$post(baseUrl, komentar)
  if (data.sessionId && process.browser) {
    localStorage.setItem('sessionId', data.sessionId)
  }

  return data
}
