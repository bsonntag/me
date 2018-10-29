/* eslint-disable no-process-env */

export default {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  remarkboxKey: process.env.REMARKBOX_KEY || '',
  ssr: process.env.SSR === 'true' || false,
};
