import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion:'2023-05-03',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: { _type: string; asset: { _ref: string } }) => builder.image(source);
