/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-image", 
  "gatsby-plugin-sitemap", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-transformer-remark",

  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/content/`,
    },
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
    },
  },

  `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
]
};