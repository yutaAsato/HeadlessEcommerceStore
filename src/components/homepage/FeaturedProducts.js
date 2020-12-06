/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import * as mq from "../layout/media-queries"

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

  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          [mq.small]: {
            // display: "none",
          },
        }}
      >
        <Styled.h2 sx={{ color: `primary` }}>FEATURED PRODUCTS</Styled.h2>
      </div>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <ProductCard products={products} productType={"featured"} />
      </div>
    </div>
  )
}

//=================styles---------------------

const media = {
  phone: styles => `
  @media only screen and (max-width: 480px){
    ${styles}
  }
  `,
  tablet: styles => `
  @media only screen and (max-width: 800px){
    ${styles}
  }
  `,
  laptop: styles => `
  @media only screen and (max-width: 1050px){
    ${styles}
  }
  `,
  smallDesktop: styles => `
  @media only screen and (max-width: 1300px){
    ${styles}
  }
  `,
  desktop: styles => `
  @media only screen and (max-width: 1600px){
    ${styles}
  }
  `,
}

// const FeaturedContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   margin-top: 8.2rem;

//   ${props =>
//     props.phone &&
//     media[props.phone](`
//     margin-top:2rem
// `)}
// `
// const TextWrapper = styled.div`
//   font-weight: bold;
//   margin-top: -60px;

//   ${props =>
//     props.phone &&
//     media[props.phone](`
// font-size: 0.2rem
// `)}
// `
// const ProductListWrapper = styled.div`
//   display: flex;
//   position: relative;
//   width: 100%;
//   justify-content: center;
// `
// const ProductListItems = styled.div``
