/** @jsx jsx */

import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"

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
      <ProductPageContainer phone="phone">
        <Grid gap={2} columns={12}>
          <ProductImageWrapper>
            <ProductImageOverlay />
            <ProductImage>
              <Img
                fluid={
                  product.variants[0].image.localFile.childImageSharp.fluid
                }
              />
            </ProductImage>
          </ProductImageWrapper>

          <ProductDetailsContainer>
            <Styled.h1 sx={{ mt: 0, mb: 2 }}>{product.title}</Styled.h1>
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
          </ProductDetailsContainer>
        </Grid>
      </ProductPageContainer>
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

//================================

//styles

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

const ProductPageContainer = styled.div`
  padding-top: 8rem;

  ${props =>
    props.tablet &&
    media[props.tablet](`
  color: pink

`)}
`

const ProductImageWrapper = styled.div`
  grid-column: 3;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-style: solid; */
  position: relative;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  /* margin: 100px auto; */
  background: white;
  border-radius: 5px;
`

const ProductImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;

  background-color: rgba(18, 34, 46, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    background-color: white;
    border-radius: 50%;
    padding: 6px;
  }
`

const ProductImage = styled.div`
  width: 600px;
`

const ProductDetailsContainer = styled.div`
  /* padding-top: 8rem; */
  grid-column: 6 / span 5;
`
