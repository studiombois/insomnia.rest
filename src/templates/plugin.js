import { graphql } from 'gatsby';
import React from 'react';
import Plugin from '../lib/plugin';
import Title from '../partials/title';
import SocialCards from '../components/social-cards';
import iconPluginDefault from '../assets/icons/plugins-default-icon.svg';

export default ({ data: { npmPackage: pkg } }) => {
  let plugin = new Plugin(pkg);

  return (
    <React.Fragment>
      <Title>{`${plugin.displayName} (${plugin.name})`}</Title>
      <SocialCards
        title={`${plugin.displayName} (${plugin.name})`}
        summary={`Install ${plugin.displayName} on Insomnia`}
      />

      <article className="plugin-page">
        {Header(plugin)}

        <div className="container">
          <div className="row">{Overview(plugin)}</div>
        </div>
      </article>
    </React.Fragment>
  );
};

function InstallButton(plugin) {
  const installUrl = plugin.isDesignerPlugin
    ? plugin.designerDeepLink
    : plugin.coreDeepLink;

  const installLabel = plugin.isDesignerPlugin
    ? 'Install in Designer'
    : 'Install in Core';

  return (
    <a
      href={installUrl}
      className="button primary bn br-5 w-22 mw-200 mt-4 mb-4 mr-0 ml-0">
      <i className="las la-download" /> {installLabel}
    </a>
  );
}

function Header(plugin) {
  return (
    <header className="plugin-page-header container mb-5">
      <div className="row">
        <div className="col-12">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div>
                <img
                  src={plugin.icon || iconPluginDefault}
                  className="self-start plugin-icon pt-2 mr-4"
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="mb-1">{plugin.displayName || plugin.name}</h1>
                <div className="text-xs">
                  <strong className="mr-3">Version {plugin.version}</strong>
                  {PublishDate(plugin)}
                </div>
              </div>
            </div>

            {InstallButton(plugin)}
          </div>
        </div>
      </div>
    </header>
  );
}

function Overview(plugin) {
  return (
    <div>
      {Overview.Content(plugin)}
      {Overview.Sidebar(plugin)}
    </div>
  );
}

Overview.Content = plugin => (
  <section className="col-9 content">
    {plugin.coverImage ? (
      <img src={plugin.coverImage} alt="plugin cover" />
    ) : (
      ''
    )}
    <h1>Overview</h1>
    <div dangerouslySetInnerHTML={{ __html: plugin.readme }} />
  </section>
);

Overview.Sidebar = plugin => (
  <aside className="col-3 plugin-sidebar">
    <dl>{InfoItem('Author', Author(plugin))}</dl>

    <dl className="flex flex-row flex-wrap justify-between">
      {InfoItem('Version', plugin.version)}
      {InfoItem('Installations', plugin.downloads('lastYear'))}
      {InfoItem('Released', plugin.releaseDateFormatted)}
      {InfoItem('Updated', plugin.lastModifiedDateFormatted)}
    </dl>

    <dl>
      {InfoLink(
        plugin.npm.links && plugin.npm.links.npm,
        <a href={plugin.npm.links.npm}>
          <i className="lab la-npm" /> {plugin.npmDisplay}
        </a>
      )}

      {InfoLink(
        plugin.npm.links && plugin.npm.links.homepage,
        <a href={plugin.npm.links.homepage}>
          <i className="las la-external-link-square-alt" />{' '}
          {plugin.npm.links.homepage}
        </a>
      )}

      {InfoLink(
        plugin.npm.git.isGithub,
        <a href={plugin.npm.git.url}>
          <i className="lab la-github" /> {plugin.gitDisplay}
        </a>
      )}

      {InfoLink(
        plugin.npm.git.isGitlab,
        <a href={plugin.npm.git.url}>
          <i className="lab la-gitlab" /> {plugin.gitDisplay}
        </a>
      )}
    </dl>
  </aside>
);

function InfoItem(key, value) {
  return (
    <div className="flex flex-column mb-2 text-xs">
      <dt className="fw-400 subtle mb-2">{key}</dt>
      <dd className="fw-500 m-0">{value}</dd>
    </div>
  );
}

function InfoLink(shouldShow, value) {
  return (
    shouldShow && (
      <div className="flex flex-column mb-2 text-xs">
        <dd className="fw-500 m-0 text-overflow">{value}</dd>
      </div>
    )
  );
}

function Author(plugin) {
  /* Weird issue in ESLint where it considers onError a keyboard / mouse event. */
  /* eslint-disable */
  return (
    <div className="flex content-start justify-start items-start">
      <img
        src={plugin.authorIcon}
        alt="Author Avatar"
        className="d-inline-block position-relative m-0 mr-2"
        onError={e => {
          e.target.onerror = null;
          e.target.src = plugin.authorIconFallback;
        }}
        style={{ width: '24px', top: '0.1rem' }}
      />
      <span>{plugin.authorName}</span>
    </div>
  );
  /* eslint-enable */
}

function PublishDate(plugin) {
  return (
    <time className="mr-3" dateTime={plugin.lastModifiedDate}>
      Published {plugin.publishedAgo}
    </time>
  );
}

export const pageQuery = graphql`
  query PluginByName($slug: String!) {
    npmPackage(fields: { name: { eq: $slug } }) {
      name
      downloads {
        lastYear
        lastMonth
        lastWeek
        lastDay
      }
      meta {
        name
        displayName
        description
        bundle
        unlisted
        deprecated
        categories
        publisher {
          name
          icon
        }
        applications {
          cli
          core
          designer
        }
        images {
          icon
          cover
        }
      }
      npm {
        released
        description
        version
        date
        git {
          url
          username
          project
          isGithub
          isGitlab
        }
        author {
          name
        }
        publisher {
          name
        }
        links {
          npm
          homepage
          repository
        }
        readme
      }
    }
  }
`;
