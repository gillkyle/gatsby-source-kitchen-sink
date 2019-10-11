import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <Layout>
      <h1>{data.title.text}</h1>
      <Img
        fixed={data.featured_image.localFile.childImageSharp.fixed}
        alt="Gatsby and Prismic logos"
      />
      <div>{data.content.text}</div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          text
        }
        featured_image {
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
