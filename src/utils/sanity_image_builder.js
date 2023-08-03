import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
// import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io/',
  projectId: '2s86hdla',
  dataset: 'production',
})

// function urlFor(source) {
//   return builder.image(source).url()
// }

function urlFor(source) {
  return builder.image(source)
}

export default urlFor
