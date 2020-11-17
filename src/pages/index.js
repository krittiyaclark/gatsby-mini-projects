import React from 'react'
import Layout from '../components/Layout'

import { ExampleButton } from '../components/button'

import '../components/Layout.css'

export default function Home() {
  return (
    <Layout>
      Hello world!!
      <ExampleButton>click</ExampleButton>
    </Layout>
  )
}
