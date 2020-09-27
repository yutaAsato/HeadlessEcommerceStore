/** @jsx jsx */

import { Styled, jsx } from "theme-ui"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Logo } from "../../image"

import { CartLogo } from "./HeaderCart"

//=================================================================

const HeaderSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 2000,
    arrows: false,
  }

  return (
    <div>
      <Slider {...settings}>
        <div style={{ display: `flex`, justifyContent: `center` }}>
          <div
            style={{
              width: `290px`,
              margin: `0 auto`,
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <Logo />
          </div>
        </div>
        <div style={{ display: `flex` }}>
          <div
            style={{
              width: `190px`,
              margin: `0 auto`,
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <span
              style={{
                color: `white`,
                whiteSpace: `nowrap`,
                marginTop: `20px`,
              }}
            >
              NEW COLLECTION OUT NOW
            </span>
          </div>
        </div>
        <div style={{ display: `flex` }}>
          <div
            style={{
              width: `220px`,
              margin: `0 auto`,
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <span
              style={{
                color: `white`,
                whiteSpace: `nowrap`,
                marginTop: `20px`,
              }}
            >
              FREE WORLDWIDE SHIPPING
            </span>
          </div>
        </div>
      </Slider>
    </div>
  )
}
//=========================================================

const navBarHead = [
  { title: "HOME", url: "/" },
  { title: "APPAREL", url: "/apparel" },
  { title: "STUDIO", url: "/studio" },
  { title: "GALLERY", url: "/gallery" },
  { title: "ABOUT", url: "/about" },
]

//==========================================================

export const Header = ({ siteTitle }) => {
  return (
    <Grid>
      <HeaderContainer>
        {/* <HeaderSlick>
        <HeaderSlickWrapper>
          <HeaderSlider />
        </HeaderSlickWrapper>
      </HeaderSlick> */}
        <LogoWrapperContainer size={1} collapse="tablet" laptop={"laptop"}>
          <LogoWrapper laptop="laptop">
            <Link to={`/`} style={{ textDecoration: `none` }}>
              <Styled.h3
                sx={{
                  fontSize: `2.4rem`,
                  fontStyle: `italic`,
                  color: `primary`,
                }}
              >
                CONCEPT.
              </Styled.h3>
            </Link>
          </LogoWrapper>
        </LogoWrapperContainer>

        <NavbarWrapper size={10}>
          <NavbarItems phone="phone" tablet="tablet">
            <UnorderedList>
              {navBarHead.map(nav => (
                <Link to={nav.url} style={{ textDecoration: `none` }}>
                  <div className="listWrapper" key={nav.title}>
                    <Styled.li>{nav.title}</Styled.li>
                  </div>
                </Link>
              ))}
              <CartLogoWrapper collapse="phone">
                <CartLogo />
              </CartLogoWrapper>
            </UnorderedList>
          </NavbarItems>
        </NavbarWrapper>
      </HeaderContainer>
    </Grid>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

//====================================================

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

const Grid = styled.div`
  /* border: 2px solid red; */
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 99;
`

const LogoWrapperContainer = styled.div`
  margin: 3rem 0rem 0rem 0rem;
  /* max-height: 4rem; */

  flex: ${props => props.size};

  ${props =>
    props.collapse &&
    media[props.collapse](`
display: none
`)}
`

const LogoWrapper = styled.div`
  margin-left: 6rem;
  min-height: 4rem;
  line-height: 4rem;

  ${props =>
    props.laptop &&
    media[props.laptop](`
    margin-left: 3rem
`)}
`

// const HeaderSlick = styled.header`
//   /* background: black; */
//   margin-bottom: 1rem;
//   height: 120px;
//   background: rgba(0, 0, 0, 0.2);
// `

// const HeaderSlickWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 910px;
//   padding: 2rem 1.0875rem;
// `
const NavbarWrapper = styled.div`
  /* position: absolute; */
  margin: 3rem 0rem 0rem 0rem;
  width: 100%;

  max-height: 4rem;

  flex: ${props => props.size};
  ${props =>
    props.phone &&
    media[props.phone](`
`)}
`

const NavbarItems = styled.nav`
  /* max-width: 70rem; */
  max-width: 70%;
  min-height: 3rem;

  ${props =>
    props.tablet &&
    media[props.tablet](`
    max-width: 93%;
`)}

  ${props =>
    props.phone &&
    media[props.phone](`
    max-width: 90%;
`)}
`

const UnorderedList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* padding-left: 270px; */
  margin-bottom: 0.9rem;
`
const CartLogoWrapper = styled.div`
  ${props =>
    props.collapse &&
    media[props.collapse](`
display: none
`)}
`
