import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//====================================================================================

//Slider
const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 6000,
}

const MainHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHomepageBodyHerotopsection {
        nodes {
          items {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 3080, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const slider = data.allPrismicHomepageBodyHerotopsection.nodes[0].items.map(
    x => (
      <div
        key={x.image.localFile.childImageSharp.fluid.src}
        style={{ width: `100%`, height: `100%` }}
      >
        <Img
          style={{ width: `100%` }}
          imgStyle={{ height: `100%` }}
          fluid={x.image.localFile.childImageSharp.fluid}
        />
      </div>
    )
  )

  return <Slider {...settings}>{slider}</Slider>
}

//==========================================================================

export const HeroImage = () => {
  // console.log(window.innerHeight)

  return (
    <>
      <HeroImageWrapper>
        <MainHeroImage />
        {/* <ImageOverlay /> */}
        {/* <TextWrapper>
          <TextOverlayWrapper>
            <TextOverlay />
            <HeroMainText>
              <span
                style={{
                  fontSize: `2.5rem`,
                  fontWeight: `700`,
                  color: `red`,
                  fontStyle: `italic`,
                }}
              >
                NEW{" "}
              </span>
              <span style={{ fontSize: `2.1rem`, fontWeight: `300` }}>
                COLLECTION
              </span>
            </HeroMainText>
          </TextOverlayWrapper>
        </TextWrapper> */}
        {/* <HeroButtonWrapper>
          <HeroButton>SHOP NOW</HeroButton>
        </HeroButtonWrapper> */}
      </HeroImageWrapper>
    </>
  )
}

//==================================================

const HeroImageWrapper = styled.div`
  width: 100%;
  position: relative;
  /* margin-top: -20px; */
`
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70%;
  background-color: black;
  opacity: 0.2;
`

const TextWrapper = styled.div`
  width: 100%;
  color: white;
  position: absolute;
  top: 50%;
  left: 5%;
  bottom: 140;
  right: 0;
  z-index: 99;
  white-space: nowrap;
  display: inline;
`

const TextOverlayWrapper = styled.div`
  position: relative;
  /* width: 100%;
  height: 100%; */
`
const TextOverlay = styled.div`
  position: absolute;
  background-color: grey;
  width: 360px;
  height: 50px;
  opacity: 0.5;
`
const HeroMainText = styled.div`
  position: absolute;
  top: 12px;
`

const HeroButtonWrapper = styled.div`
  position: absolute;
  top: 54%;
  left: 10%;
  bottom: 140;
  right: 0;
  z-index: 99;
  white-space: nowrap;
  display: inline;
`
const HeroButton = styled.button`
  background: ${props => (props.primary ? "#070707" : "#070707")};
  color: ${props => (props.primary ? "black" : "#d0c9c9")};

  font-size: 1em;
  font-style: italic;
  font-weight: 700;
  margin: 1em;
  padding: 0.25em 1em;
  /* border: 2px solid black; */
  border-radius: 3px;
`
