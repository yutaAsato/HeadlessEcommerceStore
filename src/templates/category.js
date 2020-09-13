/** @jsx jsx */

import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { Styled, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import Layout from "../components/layout/LayOut"
import { graphql } from "gatsby"

//components
import { ProductCard } from "../components/shared/ProductCard"

//===============================================================

const CategoryPage = ({ data: { allShopifyProduct: product } }) => {
  console.log("categoryPage:", product)

  // console.log(product.nodes[0].productType)

  return (
    <Layout>
      <h1>This is the {product.nodes[0].productType} page</h1>
      <FeaturedContainer>
        <TextWrapper>
          <span>FEATURED PRODUCTS</span>
        </TextWrapper>
        <ProductListWrapper>
          <ProductListItems>
            <ProductCard
              products={product}
              productType={product.nodes[0].productType}
            />
          </ProductListItems>
        </ProductListWrapper>
      </FeaturedContainer>
    </Layout>
  )
}

export default CategoryPage

export const CategoryPageQuery = graphql`
  query categoryPage($productType: String!) {
    allShopifyProduct(filter: { productType: { eq: $productType } }) {
      nodes {
        id
        handle
        shopifyId
        title
        descriptionHtml
        variants {
          priceV2 {
            currencyCode
            amount
          }
          shopifyId
          title
          selectedOptions {
            name
            value
          }
          id
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        options {
          values
          name
        }
        productType
        vendor
      }
    }
  }
`

const FeaturedContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 8.2rem;
  /* margin-top: -200px; */
`
const TextWrapper = styled.div`
  font-weight: bold;
  margin-top: -100px;
`
const ProductListWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
`
const ProductListItems = styled.div`
  /* width: 100%; */
`
