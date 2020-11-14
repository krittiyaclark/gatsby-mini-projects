/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby',
    description: 'Some description',
    author: '@Alex',
    data: ['item 1', 'item 2'],
    person: { name: 'Bill', age: 99 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
