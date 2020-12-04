/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

//components
import { Header } from "./header/Header"
import { Footer } from "./Footer"
import "./layout.css"

//======================================================================
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper phone="phone">
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
      {/* </GlobalStyle> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//sets fonts
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,800;0,900;1,200;1,300;1,400;1,700;1,800;1,900&display=swap");
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito Sans', serif;
  }
`

//----------------styles-------------------------
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

const HeaderWrapper = styled.div`
  /* display: none */
  ${props =>
    props.phone &&
    media[props.phone](`
display: none
`)};
`

export default Layout
