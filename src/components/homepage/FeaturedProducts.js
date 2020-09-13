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

  console.log("featurerdProducts:", products)

  console.log(productType)

  return (
    <FeaturedContainer>
      <TextWrapper>
        <span>FEATURED PRODUCTS</span>
      </TextWrapper>
      <ProductListWrapper>
        <ProductListItems>
          <ProductCard products={products} />
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
