/* eslint-disable no-process-env */
const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/blog`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-remark',
    {
      options: { displayName: !isProduction },
      resolve: 'gatsby-plugin-styled-components',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        display: 'minimal-ui',
        icon: 'src/images/ben.jpg',
        name: 'Benjamim Sonntag',
        start_url: '/', // eslint-disable-line id-match
        theme_color: '#000000', // eslint-disable-line id-match
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    baseUrl: process.env.BASE_URL || '',
    remarkboxKey: process.env.REMARKBOX_KEY || '',
    title: 'Benjamim Sonntag',
  },
};
