import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"

//components
import { FeaturedProducts } from "../components/homepage/FeaturedProducts"
import Layout from "../components/layout/LayOut"
import { HeroImage } from "../components/homepage/HeroImage"
import { Category } from "../components/homepage/Category"

import { App } from "../components/context/shopifyContext"

//===========================================================

export const query = graphql`
  query MyQuery {
    prismicHomepageBodyHerotopsection {
      items {
        image {
          localFile {
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
        }
        rich_text {
          text
        }
        title {
          text
        }
      }
    }
    allShopifyCollection(filter: { title: { eq: "protoOne homepage" } }) {
      nodes {
        products {
          handle
          vendor
          variants {
            priceV2 {
              amount
              currencyCode
            }
            shopifyId
            sku
            title
          }
          description
          descriptionHtml
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
        }
        title
      }
    }
    apparel: shopifyCollection(title: { eq: "apparel" }) {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      title
    }
    studio: shopifyCollection(title: { eq: "studio" }) {
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      title
    }
  }
`
//========================================================

export default function Home({ data }) {
  console.log("INDEX:", data)
  if (!data) return null
  return (
    <App>
      <Layout>
        <HeroImage />
        <FeaturedProducts data={data} />
        {/* <Category apparel={data.apparel} studio={data.studio} /> */}
      </Layout>
    </App>
  )
}
