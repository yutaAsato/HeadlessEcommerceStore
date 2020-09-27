/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Grid, Divider, Button, Card, Text } from "@theme-ui/components"
import { Link } from "../components/link"
import Layout from "../components/layout/LayOut"
import { useStaticQuery, graphql } from "gatsby"
import {
  useCart,
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckoutUrl,
} from "gatsby-theme-shopify-manager"

import styled from "styled-components"

//=========================================================================================

const CartPage = () => {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const lineItems = useCartItems()
  const cart = useCart()
  // const { tax, total } = useCartTotals()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckoutUrl()
  const addItemToCart = useAddItemToCart()

  //===========================================================

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  //============================================================

  //line items
  const LineItem = ({ item }) => (
    <div
      sx={{
        display: "grid",
        gridGap: "15px",
        gridTemplateColumns: "120px 2fr 80px 80px",
        alignItems: "center",
      }}
    >
      <div>
        <div sx={{ padding: 1, border: "1px solid gray" }}>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link
          url={`/product/${getHandleForVariant(item.variant.id)}`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          {item.title}
        </Link>
        <Styled.ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: "none" }}>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <strong>{name}: </strong>
              {value}
            </li>
          ))}
          <li key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
        </Styled.ul>
      </div>
      <Button variant="link" onClick={() => removeFromCart(item.variant.id)}>
        Delete
      </Button>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 700,
          marginLeft: "auto",
        }}
      >
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </Text>
    </div>
  )

  //empty cart
  const emptyCart = (
    <div style={{ paddingTop: `10rem` }}>
      <Styled.h1>Cart</Styled.h1>
      <Styled.p>Your shopping cart is empty.</Styled.p>
    </div>
  )

  //==========================================================

  return lineItems.length < 1 ? (
    <Layout>
      <Grid gap={2} column={12}>
        <div style={{ gridColumn: `3/ span 8` }}>{emptyCart}</div>
      </Grid>
    </Layout>
  ) : (
    <Layout>
      <Grid gap={2} columns={12}>
        <MainCartWrapper tablet="tablet" phone="phone">
          {/* <SEO title="Cart" /> */}
          <Styled.h1>Cart</Styled.h1>
          {lineItems.map(item => (
            <React.Fragment key={item.id}>
              <LineItem key={item.id} item={item} />
              <Divider sx={{ my: 3 }} />
            </React.Fragment>
          ))}

          <div sx={{ display: "flex" }}>
            <Card sx={{ marginLeft: "auto", minWidth: "20rem", p: 4 }}>
              <Styled.h3 sx={{ mt: 0, mb: 3 }}>Cart Summary</Styled.h3>

              <Divider />
              <Grid gap={1} columns={2}>
                <Text variant="bold">Estimated Total:</Text>
                <Text variant="bold" sx={{ marginLeft: "auto" }}>
                  ${cart.totalPrice}
                </Text>
              </Grid>

              <Link url={checkout}>
                <Button sx={{ mt: 4, width: "100%" }} onClick={checkout}>
                  Checkout
                </Button>
              </Link>
            </Card>
          </div>
        </MainCartWrapper>
      </Grid>
    </Layout>
  )
}

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

const MainCartWrapper = styled.div`
  padding-top: 8rem;

  grid-column: 3 / span 8;

  ${props =>
    props.tablet &&
    media[props.tablet](`
  grid-column: 2 / span 8;
  `)}
  ${props =>
    props.phone &&
    media[props.phone](`
    margin: 10px 10px 10px 10px;
  grid-column: 1 / span 6;
  `)}
`

export default CartPage
