import React from 'react'
import Layout from '../components/Layout'

import styles from '../components/products.module.css'

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.page.h1}>products</h1>

        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolor
          quae dicta corporis, quam obcaecati laboriosam sit nesciunt aspernatur
          repellat vel sunt blanditiis quia ut adipisci libero quas rem. Cum.
        </p>
      </div>
    </Layout>
  )
}

export default products
