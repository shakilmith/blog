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
  "gatsby-plugin-decap-cms",

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
]
};