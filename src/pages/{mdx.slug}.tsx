import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

export default function PostPage({data}: any) {
  const {body} = data.mdx
  
  return (
    <>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String){
  mdx(slug: {eq: $slug}) {
    slug
    id
    body
    frontmatter {
      date
      title
    }
  }
}
`