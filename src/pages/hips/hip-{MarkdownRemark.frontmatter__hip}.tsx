import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { HipPageQuery } from '../../../types/gql'
import { getGithubLink } from '../../components/utils'

interface Props {
  frontmatter__hip: number
  data: HipPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  console.log(`Got data`, data)
  const { markdownRemark } = data
  const { frontmatter, html, fileAbsolutePath } = markdownRemark
  const githubLink = getGithubLink(fileAbsolutePath)
  return (
    <Main>
      <Helmet title={`HIP-${frontmatter.hip}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        <a href={githubLink} className="inline-block">
          HIP-{frontmatter.hip}: {frontmatter.title} <SourceIcon />
        </a>
      </h1>
      <FrontmatterTable frontmatter={frontmatter} />
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query hipPage($frontmatter__hip: Int) {
    markdownRemark(frontmatter: { hip: { eq: $frontmatter__hip } }) {
      fileAbsolutePath
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
