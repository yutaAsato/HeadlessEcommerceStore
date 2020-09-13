import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { CartIcon } from "../../Icons/CartIcon"

import { useCartCount } from "gatsby-theme-shopify-manager"

/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

export const CartLogo = () => {
  const count = useCartCount()

  const countMarkup = (
    <span
      sx={{
        display: "inline-block",
        background: "white",
        color: "black",
        height: "20px",
        lineHeight: "20px",
        width: "20px",
        fontSize: "0.8em",
        borderRadius: "10px",
        ml: 2,
        top: "-4px",
        position: "relative",
        textAlign: "center",
      }}
    >
      {count}
    </span>
  )

  return (
    <Link to="/cart" isButton>
      <CartIcon />
      {countMarkup}
    </Link>
  )
}
