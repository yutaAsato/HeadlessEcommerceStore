/** @jsx jsx */

import { Styled, jsx } from "theme-ui"
import React from "react"
import styled from "styled-components"

//============================================

export const Footer = () => {
  return (
    <FooterContainer phone="phone">
      <Styled.h6>
        Copyright © 2020 CONCEPT Ecommerce. All rights reserved.
      </Styled.h6>
    </FooterContainer>
  )
}

//=============================================

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

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 10rem;

  ${props =>
    props.phone &&
    media[props.phone](`
    margin: 10rem 10rem
  width: 20rem
  `)}
`
