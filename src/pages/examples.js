import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

function examples({ data }) {
  // console.log(props)
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      examples
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
