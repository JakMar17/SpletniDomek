import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: 'v3',
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
        include: 'tags,authors',
      },
      { formats: ['html', 'plaintext'] }
    )
    .catch((err) => {
      console.error(err)
    })
}
