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
      <FeaturedContainer>
        <TextWrapper>
          <Styled.h3 sx={{ color: `primary` }}>
            {product.nodes[0].productType.toUpperCase()}
          </Styled.h3>
          <Styled.p>
            Browse our top {product.nodes[0].productType} picks
          </Styled.p>
        </TextWrapper>
        <ProductListWrapper>
          <ProductListItems>
            <ProductCard
              products={product.nodes}
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
  /* max-width: 500px; */

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
  width: 100%;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  /* margin-top: -100px; */
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
