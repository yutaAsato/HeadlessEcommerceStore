/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import * as mq from "../layout/media-queries"

function HamburgerMenu() {
  function showSettings(event) {
    event.preventDefault()
  }
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      width: "100%",
      background: "#ffffff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      paddingLeft: "80px",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      //   display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
    menuItem: {
      fontSize: "3rem",
    },
  }

  return (
    <Menu styles={styles} right>
      {navBarHead.map(nav => (
        <Link
          to={nav.url}
          css={{
            textDecoration: "none",
          }}
        >
          <ul
            key={nav.title}
            css={{
              padding: "0px",
              textDecoration: "none",
              listStyleType: "none",
            }}
          >
            <Styled.li css={{ fontWeight: "900px" }}>{nav.title}</Styled.li>
          </ul>
        </Link>
      ))}
    </Menu>
  )
}

const navBarHead = [
  { title: "HOME", url: "/" },
  { title: "APPAREL", url: "/apparel" },
  { title: "STUDIO", url: "/studio" },
  { title: "GALLERY", url: "/gallery" },
  { title: "ABOUT", url: "/about" },
  { title: "CART", url: "/cart" },
]

export { HamburgerMenu }
