import React from "react"
import { Button } from "theme-ui"
import { useAddItemsToCart, useCartCount } from "gatsby-theme-shopify-manager"

export function ExampleUseAddItemsToCart() {
  const cartCount = useCartCount()
  const addItemsToCart = useAddItemsToCart()

  async function addToCart() {
    const items = [
      {
        variantId: "asdasdasd",
        quantity: 1,
      },
    ]

    try {
      await addItemsToCart(items)
      alert("Successfully added that item to your cart!")
    } catch {
      alert("There was a problem adding that item to your cart.")
    }
  }

  return (
    <>
      <p>There are currently {cartCount} items in your cart.</p>
      <Button onClick={addToCart}>Add items to your cart</Button>
    </>
  )
}
