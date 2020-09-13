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

const navBarHead = [
  { title: "HOME", url: "/" },
  { title: "APPAREL", url: "/apparel" },
  { title: "STUDIO", url: "/studio" },
  { title: "GALLERY", url: "/gallery" },
  { title: "ABOUT", url: "/about" },
]

export const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      {/* <HeaderSlick>
        <HeaderSlickWrapper>
          <HeaderSlider />
        </HeaderSlickWrapper>
      </HeaderSlick> */}
      <NavbarWrapper>
        <NavbarItems>
          <UnorderedList>
            {navBarHead.map(nav => (
              <Link to={nav.url} style={{ textDecoration: `none` }}>
                <div className="listWrapper" key={nav.title}>
                  <li
                    style={{
                      flex: `3`,
                      listStyleType: `none`,
                      fontWeight: `bold`,
                      fontSize: `0.8rem`,
                      color: `#c2c2c2`,
                    }}
                  >
                    {nav.title}
                  </li>
                </div>
              </Link>
            ))}
            <CartLogo />
          </UnorderedList>
        </NavbarItems>
      </NavbarWrapper>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
`

const HeaderSlick = styled.header`
  /* background: black; */
  margin-bottom: 1rem;
  height: 120px;
  background: rgba(0, 0, 0, 0.2);
`

const HeaderSlickWrapper = styled.div`
  margin: 0 auto;
  max-width: 910px;
  padding: 2rem 1.0875rem;
`
const NavbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  top: 30px;
  left: 10px;
`
const NavbarItems = styled.nav`
  padding-left: 155px;
  width: 80%;
`
const UnorderedList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 270px;
  margin-bottom: 0.9rem;
  filter: brightness(1.2);
`
