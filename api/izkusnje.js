const baseUrl = process.env.backendUrl + 'izkusnja'

export async function getIzkusnje() {
  return await fetch(baseUrl).then((res) => res.json())
}

export async function putGorGlas(objectId, $axios) {
  const data = await $axios.$put(baseUrl + '/gor-glas?izkusnja-id=' + objectId)
  return data
}

export async function putDolGlas(objectId, $axios) {
  const data = await $axios.$put(baseUrl + '/dol-glas?izkusnja-id=' + objectId)
  return data
}

export async function postIzkusnja(izkusnja, axios) {
  const data = await axios.$post(baseUrl, izkusnja)
  return data
}
