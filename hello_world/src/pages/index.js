import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Enter Question</h1>
    <textarea />
    <button>send</button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
