const baseUrl = process.env.backendUrl + 'zahteva'

export async function getZahteve(axios) {
  return await axios.$get(baseUrl);
}

export async function postZahteva(axios, body) {
  return await axios.$post(baseUrl, body);
}
