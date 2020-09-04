import React from 'react';
import { graphql } from 'gatsby';
import ChangelogListItem from '../components/changelog-list-item';
import DownloadButton from '../components/download-button';
import Link from '../components/link';
import SocialCards from '../components/social-cards';
import ShareButtons from '../partials/share-buttons';
import Title from '../partials/title';
import Contributors from '../partials/contributors';


export default class BlogTemplate extends React.Component {
  render() {
    const { data: { markdownRemark: { frontmatter, html } } } = this.props;
    const appName = frontmatter.app === 'com.insomnia.designer' ? 'Designer' : 'Core';
    const titleStr = `Insomnia ${appName} ${frontmatter.slug}`;

    const summary = `Release notes for version ${frontmatter.slug}`;

    let githubTag = `v${frontmatter.slug}`;
    if (frontmatter.slug.match(/^\d{4}\./)) {
      githubTag = frontmatter.app === 'com.insomnia.app'
        ? `core@${frontmatter.slug}`
        : `designer@${frontmatter.slug}`;
    }

    return (
      <React.Fragment>
        <Title>{titleStr}</Title>
        <article>
          <SocialCards title={titleStr} summary={summary} />
          <header>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>
                    Insomnia {appName}
                    {' '}
                    <code>{frontmatter.slug}</code>
                  </h1>
                  <div className="meta">
                    <time dateTime={frontmatter.date}>
                      {frontmatter.date}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="content container">
            <div className="row">
              <div className="col-12">
                {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
                <p className="center">
                  <DownloadButton />
                  {' '}
                  <Link to={`https://github.com/Kong/insomnia/releases/${githubTag}`}
                        className="button button--no-outline"
                        target="_blank">
                    View on GitHub
                  </Link>
                </p>
                {frontmatter.major && (
                  <React.Fragment>
                    <p><strong>Major Changes</strong></p>
                    <ul className="ul--decorated m-0">
                      {frontmatter.major.map(c => (
                        <li key={c} className="li--major">
                          <ChangelogListItem text={c} />
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
                {frontmatter.fixes && (
                  <React.Fragment>
                    <p><strong>Bug Fixes</strong></p>
                    <ul className="ul--decorated">
                      {frontmatter.fixes.map(c => (
                        <li key={c} className="li--fix">
                          <ChangelogListItem text={c} />
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
                {frontmatter.minor && (
                  <React.Fragment>
                    <p><strong>Minor Tweaks</strong></p>
                    <ul className="ul--decorated">
                      {frontmatter.minor.map(c => (
                        <li key={c} className="li--minor">
                          <ChangelogListItem text={c} />
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
              </div>
            </div>
          </section>
        </article>
        <section className="section--bordered container share">
          <ShareButtons title={titleStr} />
        </section>
        <Contributors />
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query ChangelogBySlug($slug: String!, $app: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}, app: {eq: $app}}) {
      html
      frontmatter {
        app
        date(formatString: "MMMM DD, YYYY")
        slug
        major
        minor
        fixes
        link
        summary
      }
    }
  }
`;
