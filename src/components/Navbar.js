import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">blog</Link>
        </li>
        <li>
          <Link to="/products/">products</Link>
        </li>
        <li>
          <Link to="/examples">examples</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
