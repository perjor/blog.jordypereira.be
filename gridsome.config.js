// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jordy Pereira Blog',
  siteDescription: 'I write Vue / Javascript and personal articles.',
  siteUrl: 'https://blog.jordypereira.be',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
      },
    },
  ],
}