/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Marcus Web Dev`,
    description: `Enthusiast of the world of React sharing my projects, articles and tips`,
    titleTemplate: `%s | Marcus Web Dev`,
    url: `https://marcus-blog.netlify.app`,
    twitterUsername: `@TechNew58575550`,
    img: `/marcusblog.png`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-marcusblog.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`project`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Rubik",
              variants: ["300", "400", "500"],
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/assets/images` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `about`, path: `${__dirname}/src/about` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/src/posts` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `tips`, path: `${__dirname}/src/tips` },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
  ],
}
