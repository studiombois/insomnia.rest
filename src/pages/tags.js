import React from 'react';
import { graphql } from 'gatsby';
import Link from '../components/link';

export default ({data: {allMarkdownRemark: {group}}}) => (
  <React.Fragment>
    <header className="container">
      <h1>Blog Post Tags</h1>
    </header>
    <article className="container">
      {group
        .map(({tag, totalCount}) => (
          <Link key={tag} className="button tags__tag" to={`/tags/${tag}/`}>
            {tag} ({totalCount})
          </Link>
        ))}
      <footer>
        <Link to="/blog/">&laquo; All Blog Posts</Link>
      </footer>
    </article>
  </React.Fragment>
);

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
