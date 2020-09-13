module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "protoone",
        schemas: {
          homepage: require("./src/custom_types/homePage.json"),
          single_product: require("./src/custom_types/singleProduct.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: "noavailapparel.com",
        accessToken: "c145643f84a63da1d9f45106fc068908",
        // shouldIncludeSourcePlugin: false, // default
        // shouldWrapRootElementWithProvider: false, // default
      },
    },
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: `PrismicProducts`,
    //     imagePath: `nodes[].data.body[].items[].shopify_product.image.src`,
    //     // OPTIONAL: Name you want to give new image field on the node.
    //     // Defaults to 'localImage'.
    //     // name: "allItemImages",
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
