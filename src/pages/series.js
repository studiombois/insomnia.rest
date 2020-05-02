import React from 'react';
import { graphql } from 'gatsby';
import Link from '../components/link';

export default ({data: {allMarkdownRemark: {group}}}) => (
  <React.Fragment>
    <header className="container">
      <h1>Blog Post Series</h1>
    </header>
    <article className="container">
      {group
        .map(({series, totalCount}) => (
          <Link key={series} className="button tags__tag" to={`/series/${series}/`}>
            {series} ({totalCount})
          </Link>
        ))}
      <footer>
        <Link to="/blog/">&laquo; All Blog Posts</Link>
      </footer>
    </article>
  </React.Fragment>
);

export const pageQuery = graphql`
  query SeriesQuery {
    allMarkdownRemark {
      group(field: frontmatter___series) {
        series: fieldValue
        totalCount
      }
    }
  }
`;
