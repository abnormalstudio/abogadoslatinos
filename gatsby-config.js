module.exports = {
  siteMetadata: {
    siteUrl: "https://www.abogadoslatinos.ca",
    title: "Abogados Latinos en Canadá",
    description:
      "Quiere practicar el derecho en Canadá pero no sabe cómo validar su título en Canadá?",
    author: "Marian Serna"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snippets`,
        path: `${__dirname}/content/snippets`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Abogados Latinos en Canada",
        short_name: "Abogados en Canada",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon-512x512.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "xxx",
        anonymize: true,
        respectDNT: true,
        cookieDomain: "abogadoslatinos.ca"
      }
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              author
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  author: site.siteMetadata.author,
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                  categories: splitTags(node.frontmatter.tags)
                };
              });
            },
            query: `
            {
              allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fields: { sourceInstanceName: { eq: "articles" } } }
                limit: 1000
              ) {
                edges {
                  node {
                    id
                    timeToRead
                    excerpt(pruneLength: 250)
                    frontmatter {
                      slug
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Abogados Latinos en Canada RSS Feed"
          }
        ]
      }
    },
    "gatsby-plugin-netlify"
  ]
};
