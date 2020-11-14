import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return (
    <>
      <h2>{data.site.siteMetadata.author}</h2>
      <h2>{data.site.siteMetadata.data}</h2>
    </>
  )
}

export default Header
