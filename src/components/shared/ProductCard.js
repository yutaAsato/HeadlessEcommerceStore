/** @jsx jsx */
import { Grid, Button, Styled, jsx } from "theme-ui"
import * as mq from "../layout/media-queries"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//shopify
import { useAddItemToCart, useCartCount } from "gatsby-theme-shopify-manager"

import { Link } from "../link"

//===============================================================

export const ProductCard = products => {
  ///shopify
  const cartCount = useCartCount()
  const addItemToCart = useAddItemToCart()

  async function addToCart() {
    const variantId =
      "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg5ODQ4MTQyNjUzMA=="
    const quantity = 1

    console.log(variantId)

    try {
      await addItemToCart(variantId, quantity)
      alert("Successfully added that item to your cart!")
    } catch {
      alert("There was a problem adding that item to your cart.")
    }
  }

  return (
    <>
      <div
        css={{
          // width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          [mq.small]: {
            gridTemplateColumns: " 1fr",
          },
        }}
      >
        {products.products.map(product => (
          <div css={{ padding: "20px", width: "250px", height: "400px" }}>
            <Link url={`/product/${product.handle}`}>
              {/* <ImageOverlay /> */}
              <div
                css={{
                  maxWidth: "600px",
                  [mq.small]: {},
                }}
              >
                {products.productType === "featured" ? (
                  <Img
                    fluid={product.images[0].localFile.childImageSharp.fluid}
                  />
                ) : (
                  <Img
                    fluid={
                      product.variants[0].image.localFile.childImageSharp.fluid
                    }
                  />
                )}
              </div>
              <div
                css={{
                  maxWidth: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <Styled.h4 sx={{ margin: "10px" }}>{product.title}</Styled.h4>
                </div>
                <div>
                  <Styled.h5>{product.vendor}</Styled.h5>
                </div>
                <div>
                  <Styled.h5>
                    {product.variants[0].priceV2.amount} USD
                  </Styled.h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

//================================================

// const media = {
//   phone: styles => `
//   @media only screen and (max-width: 480px){
//     ${styles}
//   }
//   `,
//   tablet: styles => `
//   @media only screen and (max-width: 800px){
//     ${styles}
//   }
//   `,
//   laptop: styles => `
//   @media only screen and (max-width: 1050px){
//     ${styles}
//   }
//   `,
//   smallDesktop: styles => `
//   @media only screen and (max-width: 1300px){
//     ${styles}
//   }
//   `,
//   desktop: styles => `
//   @media only screen and (max-width: 1600px){
//     ${styles}
//   }
//   `,
// }

// const ProductContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);

//   ${props =>
//     props.laptop &&
//     media[props.laptop](`

//     grid-template-columns: repeat(2, 1fr);
//   `)}

//   ${props =>
//     props.tablet &&
//     media[props.tablet](`

//     grid-template-columns: 1fr;
//   `)}
// `

// const ProductCardContainer = styled.div`
//   width: 100%;

//   max-height: 520px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* border-style: solid; */
//   position: relative;

//   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
//     0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
//     0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
//     0 100px 80px rgba(0, 0, 0, 0.12);

//   min-height: 200px;
//   margin: 100px auto;
//   background: white;
//   border-radius: 5px;

//   &:hover {
//     @media screen and (min-width: 1000px) {
//       box-shadow: 0 0 0 1px rgba(130, 136, 148, 0.12),
//         0 8px 12px -4px rgba(130, 136, 148, 0.24);
//     }
//   }

//   ${props =>
//     props.tablet &&
//     media[props.tablet](`

// width: 30rem;
// height: 80rem;
//   `)}
//   ${props =>
//     props.phone &&
//     media[props.phone](`

// width: 20rem;
// height: 30rem;
//   `)}
// `

// const ProductImageWrapper = styled.div`
//   position: relative;
// `

const ImageOverlay = styled.div`
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

const ProductDetailsWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 12px;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;

  /* @media screen and (min-width: 1000px) {
    padding: 15px 25px 20px 25px;
  } */
`

// const ProductTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 3rem;
// `

// const ProductVendor = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 0.5rem;
// `

// const ProductPrice = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 0.5rem;
// `
// const ProductDescription = styled.div`
//   display: flex;
//   justify-content: center;
// `
