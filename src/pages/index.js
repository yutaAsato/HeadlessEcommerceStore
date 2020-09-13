import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { RichText } from "prismic-reactjs"

import Layout from "../components/layout/LayOut"
import { HeroImage } from "../components/homepage/HeroImage"
import { FeaturedProducts } from "../components/homepage/FeaturedProducts"

//shopify hooks
import { ExampleUseCart } from "../components/hooks/useCart"
import { ExampleUseAddItemsToCart } from "../components/hooks/addItemToCart"
import { ExampleUseCartCount } from "../components/hooks/cartCount"

import { App } from "../components/context/shopifyContext"

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
  }
`

export default function Home({ data }) {
  console.log(data)
  if (!data) return null
  return (
    <App>
      <Layout>
        <HeroImage />
        <FeaturedProducts data={data} />
      </Layout>
    </App>
  )
}
