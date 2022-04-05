import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { HccpPageQuery } from '../../../types/gql'
import { getGithubLink } from '../../components/utils'

interface Props {
  frontmatter__hip: number
  data: HccpPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, fileAbsolutePath } = markdownRemark
  const githubLink = getGithubLink(fileAbsolutePath)
  return (
    <Main>
      <Helmet title={`HCCP-${frontmatter.hccp}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        <a href={githubLink} className="inline-block">
          HCCP-{frontmatter.hccp}: {frontmatter.title} <SourceIcon />
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
  query hccpPage($frontmatter__hccp: Int) {
    markdownRemark(frontmatter: { hccp: { eq: $frontmatter__hccp } }) {
      fileAbsolutePath
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
