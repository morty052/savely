import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9tj5asa4',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  create: true,
  token: 'skz1O10x2xo43EFwBcPTBTITi7Mf3uZJqkPI8GKciRYTJ77sOleOCYMXcJNhcetNA0cm6F1FGg2EewMNKwWZy3XMXyCRoafkaA0OkHJXJOiisxk7GgHT7pBOyI7CLUDUjDXCFHtTb9zWKm7dNdAEVeWk6Yg8CajHWVvm6bMNSazxcKKGr8a5'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);