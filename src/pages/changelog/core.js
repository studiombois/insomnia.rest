import changelog from '../../../src/components/changelog';

export default props => {
  console.log('PROPS', props);
  return changelog(props);
};

export const pageQuery = graphql`
  query ChangelogCoreIndexQuery {
    allFile(filter: { sourceInstanceName: { eq: "changelog" } }) {
      edges {
        node {
          childMarkdownRemark {
            excerpt(pruneLength: 240)
            frontmatter {
              app
              date(formatString: "MMMM DD, YYYY")
              date_iso: date
              channel
              fixes
              link
              major
              minor
              slug
              summary
            }
          }
        }
      }
    }
  }
`;
