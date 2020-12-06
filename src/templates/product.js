/** @jsx jsx */

import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"

import * as mq from "../components/layout/media-queries"

import { Styled, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import Layout from "../components/layout/LayOut"
import { OptionPicker } from "../components/optionsPicker/OptionsPicker"
import { Thumbnail } from "../components/optionsPicker/Thumbnail"
import { graphql } from "gatsby"
// import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart, useCartCount } from "gatsby-theme-shopify-manager"

//========================================================

function prepareVariantsWithOptions(variants) {
  return variants.map(variant => {
    // convert the options to a dictionary instead of an array
    const optionsDictionary = variant.selectedOptions.reduce(
      (options, option) => {
        options[`${option.name.toLowerCase()}`] = option.value
        return options
      },
      {}
    )

    // return an object with all of the variant properties + the options at the top level
    return {
      ...optionsDictionary,
      ...variant,
    }
  })
}

//==================================================================================

const ProductPage = ({ data: { shopifyProduct: product }, pageContext }) => {
  console.log("productPage:", product)
  console.log("productPageContext:", pageContext)

  let sizes

  if (pageContext.productType === "apparel") {
    sizes = product.options.find(option => option.name.toLowerCase() === "size")
      .values
  }

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])

  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [color, setColor] = useState(variant.color)
  const [size, setSize] = useState(variant.size)
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.size === size && variant.color === color
    })
    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [size, color, variants, variant.shopifyId])

  console.log("variant:", variant)

  //addToCart
  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1)
    setAddedToCartMessage("🛒 Added to your cart!")
  }

  return (
    <Layout>
      <div
        css={{
          margin: "20px auto",
          padding: "4em 2em",
          maxWidth: "940px",
          width: "100%",
          display: "grid",
          gridGap: "9em",
          gridTemplateColumns: "1fr 3fr",
          [mq.small]: {
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto",
            gridGap: "3em",

            width: "100%",
          },
        }}
      >
        <div
          css={{
            minWidth: "300px",
          }}
        >
          <Img
            fluid={product.variants[0].image.localFile.childImageSharp.fluid}
          />
        </div>

        <div>
          <Styled.h4 sx={{ mt: 0, mb: 2 }}>{product.title}</Styled.h4>
          <Styled.p
            sx={{ pt: `40px` }}
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          <div>
            <Grid padding={2} columns={2}>
              {pageContext.productType === "apparel" ? (
                <OptionPicker
                  key="Size"
                  name="Size"
                  options={sizes}
                  selected={size}
                  onChange={event => setSize(event.target.value)}
                />
              ) : null}
            </Grid>
          </div>
          <div style={{ paddingTop: `20px` }}>
            <Button
              sx={{ margin: 2, display: "block" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

//==========================================================

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        id
        shopifyId
        selectedOptions {
          name
          value
        }
        priceV2 {
          amount
          currencyCode
        }
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
    }
  }
`
