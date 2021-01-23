module.exports = {
  siteMetadata: {
    title: 'portfolio',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131063561-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
