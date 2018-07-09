import * as React from 'react'
import Link from 'gatsby-link'

const PostNav = ({prev, next}) => (
    <div className="post-nav">
      {prev && (
        <div className="post-nav__side">
          <span className="post-nav__label">Previous Post</span>
          <Link className="post-nav__link" to={`/entry/${prev.frontmatter.path}`}>
            {prev.frontmatter.title}
          </Link>
        </div>
      )}
      {next && (
        <div className="post-nav__side">
          <span className="post-nav__label">Next Post</span>
          <Link className="post-nav__link" to={`/entry/${next.frontmatter.path}`}>
            {next.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
)

export default PostNav