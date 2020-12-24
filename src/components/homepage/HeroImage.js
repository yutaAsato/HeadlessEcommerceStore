import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Button, Alert, Close } from "@theme-ui/components"

//==========================================================================

//Slider
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
}

//==========================================================================

export const HeroImage = () => {
  //=========================================
  const data = useStaticQuery(graphql`
    query {
      allPrismicHomepageBodyHerotopsection {
        nodes {
          items {
            title {
              html
            }
            rich_text {
              html
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 100) {
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
  //=================================================

  //mainHeroImage
  const MainHeroImage = () => {
    //slider
    const slider = data.allPrismicHomepageBodyHerotopsection.nodes[0].items.map(
      x => (
        <div
          css={{
            paddingTop: "50px",
            minWidth: "400px",
          }}
          key={x.image.localFile.childImageSharp.fluid.src}
        >
          <Img fluid={x.image.localFile.childImageSharp.fluid} />
        </div>
      )
    )

    return <Slider {...settings}>{slider}</Slider>
  }

  //==================================================================
  const heroMainText =
    data.allPrismicHomepageBodyHerotopsection.nodes[0].items[0].rich_text.html
  //======================================================================
  return (
    <>
      <div
        css={{
          margin: "0 auto",

          width: "100%",
        }}
      >
        <MainHeroImage />
        {/* <div>
          <div dangerouslySetInnerHTML={{ __html: heroMainText }} />
          <Link to="#smooth-scroll-category">
            <Button sx={{ color: `white`, bg: `primary`, border: `none` }}>
              DISCOVER
            </Button>
          </Link>
        </div> */}
      </div>
    </>
  )
}

//==================================================

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
  /* border: 1px solid red; */
`

const HeroImageWrapper = styled.div`
  width: 100%;
  position: relative;
`

const MainWrapper = styled.div`
  width: "100%";
  display: flex;
`

const TextWrapper = styled.div`
  width: 20rem;
  color: white;
  position: absolute;
  top: 60%;
  left: 75%;
  bottom: 140;
  right: 0;
  z-index: 99;
  
  /* white-space: nowrap; */
  /* display: inline; */

  flex: ${props => props.size};

  ${props =>
    props.desktop &&
    media[props.desktop](`
    font-size: 0.9rem;
    width: 15rem;
  `)}

  ${props =>
    props.smallDesktop &&
    media[props.smallDesktop](`
    margin-top: -1rem;
    font-size: 0.9rem;
    width: 15rem;
  `)}

  ${props =>
    props.laptop &&
    media[props.laptop](`
    margin-top: -1rem;
    font-size: 0.5rem;
    width: 8rem;
  `)}
  ${props =>
    props.phone &&
    media[props.phone](`
    margin-top: -1rem;
    font-size: 0.3rem;
    width: 5rem;
  `)}

`

const HeroMainText = styled.div`
  width: 100%;
  position: absolute;
  top: 12px;
`

const HeroButtonWrapper = styled.div`
  position: absolute;
  top: 88%;
  left: 75%;
  /* bottom: 140; */
  right: 0;
  z-index: 99;
  white-space: nowrap;
  display: inline;

  ${props =>
    props.desktop &&
    media[props.desktop](`
    font-size: 0.9rem;
  `)}

  ${props =>
    props.smallDesktop &&
    media[props.smallDesktop](`
 top: 86%;
  `)}

  ${props =>
    props.laptop &&
    media[props.laptop](`
    font-size: 0.5rem;
    top: 84%;
  `)}
  ${props =>
    props.phone &&
    media[props.phone](`
    font-size: 0.3rem;
    top: 80%;
  `)}

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

//======================================================================
