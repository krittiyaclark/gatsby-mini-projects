import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
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
const Header = () => {
  // Object destructure.
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  //   const data = useStaticQuery(getData)

  return (
    <>
      {/* <h2>{data.site.siteMetadata.author}</h2>
      <h2>{data.site.siteMetadata.data}</h2> */}
      <h2>title: {title}</h2>
      <h2>name: {name}</h2>
    </>
  )
}

export default Header
