import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div>{data.content.text}</div>
    </React.Fragment>
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
      }
    }
  }
`
