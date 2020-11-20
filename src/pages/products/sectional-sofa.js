import React from 'react'
import { graphql } from 'gatsby'

const ComponentName = ({ data }) => {
  return (
    <>
      <h2>{data.product.title}</h2>
      <h2>{data.product.price}</h2>
    </>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      price
      title
    }
  }
`

export default ComponentName
