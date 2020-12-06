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
