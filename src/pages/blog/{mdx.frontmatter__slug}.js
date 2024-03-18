
import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const BlogPost = ({ data ,children}) => {
  return (
    <Layout>
      <p>My blog post contents will go here (eventually).</p>

      <p>{data.mdx.frontmatter.date}</p>
      {children}

    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`




export const Head = () =><title>Super Cool blog Posts.</title>

export default BlogPost;