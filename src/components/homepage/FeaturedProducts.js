/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

//components
import { ProductCard } from "../shared/ProductCard"

//=============================================================================

export const FeaturedProducts = (data, productType) => {
  const products = data.data.allShopifyCollection.nodes[0].products

  // console.log("featurerdProducts:", products)

  return (
    <FeaturedContainer>
      <TextWrapper>
        <Styled.h2 sx={{ color: `primary` }}>FEATURED PRODUCTS</Styled.h2>
      </TextWrapper>
      <ProductListWrapper>
        <ProductListItems>
          <ProductCard products={products} productType={"featured"} />
        </ProductListItems>
      </ProductListWrapper>
    </FeaturedContainer>
  )
}

const FeaturedContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 8.2rem;
`
const TextWrapper = styled.div`
  font-weight: bold;
  margin-top: -60px;
`
const ProductListWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
`
const ProductListItems = styled.div``
