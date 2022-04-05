import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="hiptable">
      <thead>
        <tr>
          <th className="hipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="hipnum">
              {row.frontmatter.hip ? (
                <a href={`/hips/hip-${row.frontmatter.hip}`}>
                  {row.frontmatter.hip}
                </a>
              ) : (
                <a href={`/hccp/hccp-${row.frontmatter.hccp}`}>
                  {row.frontmatter.hccp}
                </a>
              )}
            </td>
            <td className="title">{row.frontmatter.title}</td>
            <td className="author">
              <AuthorList author={row.frontmatter.author} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { StatusTable }
