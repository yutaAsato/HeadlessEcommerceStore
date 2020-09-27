/** @jsx jsx */

import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { Styled, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import Layout from "../components/layout/LayOut"
import { graphql, useStaticQuery } from "gatsby"

//===================================================

const About = () => {
  const {
    allPrismicAboutBodyAboutSlice: { nodes },
  } = useStaticQuery(graphql`
    query {
      allPrismicAboutBodyAboutSlice {
        nodes {
          items {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            text {
              html
            }
          }
        }
      }
    }
  `)

  console.log(nodes[0].items)

  return (
    <Layout>
      <AboutPageContainer phone="phone">
        <TitleContainer>
          <Styled.h1>About Us</Styled.h1>
        </TitleContainer>

        <AboutContentWrapper phone="phone">
          {nodes[0].items.map(item => (
            <ItemsContainer tablet="tablet">
              <ImageContainer phone="phone">
                <Img fluid={item.image.localFile.childImageSharp.fluid} />
              </ImageContainer>
              <TextContainer phone="phone">
                <Styled.p
                  // sx={{ pt: `40px` }}
                  dangerouslySetInnerHTML={{ __html: item.text.html }}
                />
              </TextContainer>
            </ItemsContainer>
          ))}
        </AboutContentWrapper>
      </AboutPageContainer>
    </Layout>
  )
}
//=====================================

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

const AboutPageContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;

  ${props =>
    props.phone &&
    media[props.phone](`
padding-top: 2rem



`)}
`

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`

const AboutContentWrapper = styled.div`
  width: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props =>
    props.phone &&
    media[props.phone](`
padding-top: 2rem
`)}
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: end;

  :nth-child(2n) {
    flex-direction: row-reverse;
    text-align: start;
  }

  ${props =>
    props.tablet &&
    media[props.tablet](`
flex-direction: column;
align-items: center;
text-align: center;

:nth-child(2n) {
  flex-direction: column;   
   text-align: center;
  }

`)}
`

const ImageContainer = styled.div`
  width: 30rem;

  ${props =>
    props.phone &&
    media[props.phone](`
width: 20rem



`)}
`

const TextContainer = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;

  ${props =>
    props.phone &&
    media[props.phone](`
width: 15rem;

`)}
`
export default About
