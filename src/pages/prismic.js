import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const PrismicPage = ({ data }) => (
  <Layout>
    <h1>Prismic</h1>
    <p>Posts from Prismic</p>
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(3, 1fr)`,
      }}
    >
      {data.allPrismicBlogPost.nodes.map(node => (
        <Link to={`prismic/${node.uid}`}>
          <div
            style={{ border: `1px solid gray`, borderRadius: 4, padding: 8 }}
          >
            {node.data.title.text}
            <div>{node.data.date}</div>
          </div>
        </Link>
      ))}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PrismicPage

export const query = graphql`
  query {
    allPrismicBlogPost {
      nodes {
        id
        uid
        data {
          title {
            text
          }
          date
          featured_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
