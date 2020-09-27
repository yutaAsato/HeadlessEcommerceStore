/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

//components
import Layout from "../layout/LayOut"

import { Link } from "../link"

//==================================================

export const Category = data => {
  //create array to be able itterate
  const CategoryArray = [data.studio, data.apparel]

  console.log("Category", CategoryArray)

  return (
    <CategoryContainer>
      <CategoryWrapper>
        <TextWrapper>
          <Styled.h2 id={"smooth-scroll-category"}>{"CATEGORY"}</Styled.h2>
        </TextWrapper>
        <CardWrapper>
          {CategoryArray.map(cat => (
            <Link url={`/${cat.title}`}>
              <CatWrapper>
                <CatImageContainer>
                  <ImageWrapper>
                    <Img fluid={cat.image.localFile.childImageSharp.fluid} />
                  </ImageWrapper>
                </CatImageContainer>

                <CatTextWrapper>
                  <Styled.h3>{cat.title.toUpperCase()}</Styled.h3>
                </CatTextWrapper>
              </CatWrapper>
            </Link>
          ))}
        </CardWrapper>
      </CategoryWrapper>
    </CategoryContainer>
  )
}

//==================================================

const CategoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 8.2rem;
`

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div``

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
`

const CatWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CatImageContainer = styled.div`
  padding: 0 4rem 0 4rem;
`

const ImageWrapper = styled.div`
  width: 43rem;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  margin: 100px auto;
  /* background: white; */
  border-radius: 5px;

  &:hover {
    @media screen and (min-width: 1000px) {
      box-shadow: 0 0 0 1px rgba(130, 136, 148, 0.12),
        0 8px 12px -4px rgba(130, 136, 148, 0.24);
    }
  }
`

const CatTextWrapper = styled.div`
  padding-top: 20px;
`
