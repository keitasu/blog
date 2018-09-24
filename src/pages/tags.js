import React from 'react'

// Components
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const TagsPage = () => (
  <StaticQuery
    query={graphql`
      query TagsQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 10) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const group = data.allMarkdownRemark.group
      return (
        <Layout>
          <div>
            <Helmet title={title} />
            <div>
              <h1>Tags</h1>
              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${tag.fieldValue}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      )
    }}
  />
)
export default TagsPage
