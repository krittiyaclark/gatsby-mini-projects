import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import styes from '../components/products.module.css'

const ComponentName = ({ data }) => {
  // :products can be anything
  const {
    allContentfulProduct: { nodes: products },
  } = data

  // console.log(products)

  return (
    <Layout>
      <section className={styes.page}>
        {products.map(product => {
          console.log(product.title)

          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more detail</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        slug
        id
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
