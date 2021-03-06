const siteMetadata = {
  title: `Eric G Anderson`,
  description: `Eric's frontpage for blog, active projects, and contact info.`,
  authorName: `Eric G Anderson`,
  image: `/gatsby-astronaut.png`,
  siteUrl: `https://testurl.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@spences10`,
  favicon: `./static/favicon.png`,
  backgroundColor: `#639`,
  themeColor: `#639`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/../content`,
      },
    },
    {
      // file system route api tut: https://www.youtube.com/watch?v=zqfBNgV-R6w
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // gatsbyRemarkPlugins: [
        //   `gatsby-remark-autolink-headers`,
        //   `gatsby-remark-copy-linked-files`,
        //   `gatsby-remark-smartypants`,
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 1200,
        //     },
        //   },
        //   {
        //     resolve: `gatsby-remark-external-links`,
        //     options: {
        //       target: `_blank`,
        //       rel: `noopener`,
        //     },
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `minimal-ui`,
        icon: siteMetadata.favicon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cambay\:400,700`,
          `arvo\:400,700`,
          `ubuntu mono\:400,700`,
        ],
      },
      display: 'swap',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
