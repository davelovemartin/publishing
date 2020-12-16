// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteName = 'davelovemartin'
const baseUrl = 'https://davelovemartin.dev'
const titleDelimiter = '|'
const siteDescription = 'Design Technologist, UX and Serverless Engineer and Indie Hacker.'


module.exports = {
  siteName: siteName,
  siteDescription: siteDescription,

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-structured-data',
      options: {
        siteName: siteName,
        shortDiscription: siteDescription,
        baseUrl: baseUrl,
        delimiter: titleDelimiter,
        description: siteDescription,
        published: '2020-12-01T00:00:00+09:00', //Published date/time of your site in ISO8601 format
        imagePath: './src/assets/images/author.jpg', //Default ogp image.
        twcard: 'summary_large_image', //option, one of summary, summary_large_image, app, or player.
        twcreator: '@davelovemartin' //option, @name for the content creator.
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
