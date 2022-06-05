import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yukendev',
  apiKey: process.env.API_KEY,
});
