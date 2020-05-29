import React from 'react';
import { graphql } from 'gatsby';
import InfiniteScroll from 'react-infinite-scroll-component';
import Plugin from '../lib/plugin';
import SocialCards from '../components/social-cards';
import iconPluginDefault from '../assets/icons/plugins-default-icon.svg';

function Header() {
  // We use function-style for SocialCards to avoid recursive deep-equals check issue
  // https://github.com/nfl/react-helmet/issues/373
  return (
    <React.Fragment>
      {SocialCards({
        key: 'plugin-hub',
        title: 'Plugin Hub',
        summary: 'Discover and install Insomnia plugins'
      })}
      <header className="plugins-header text-center">
        <div className="row">
          <div className="col-12">
            <h1>Plugin Hub</h1>
            <p>Extend Insomnia with Powerful Plugins</p>
            <p className="text-sm">
              <PluginDocsLink />
            </p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

function Loader() {
  return (
    <div style={{ textAlign: 'center' }} className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h4>Loading...</h4>
        </div>
      </div>
    </div>
  );
}

function NoMoreResults(numResults) {
  return (
    <div style={{ textAlign: 'center' }} className="container mt-5">
      <div className="row">
        <div className="col-12">
          <p>
            {numResults
              ? "No more results. Don't see your plugin?"
              : 'No matches found'}
            <br />
            <a href="https://support.insomnia.rest/article/26-plugins">
              Create a Plugin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PluginBox(pkg, period, sortBy, sortOrder) {
  let plugin = new Plugin(pkg);

  return (
    <div className="plugin-wrapper d-flex" key={pkg.name + sortBy + sortOrder}>
      <div className="plugin w-100">
        <div className="plugin-header d-flex w-100">
          <div className="plugin-logo">
            <img
              src={plugin.icon || iconPluginDefault}
              className="icon"
              alt="Logo"
            />
          </div>
          <div className="plugin-name">
            <a href={plugin.hubLink}>{plugin.displayName}</a>
          </div>
          <div className="plugin-info">
            <span className="plugin-author">{plugin.authorName}</span>
          </div>
        </div>

        <p
          className="plugin-content d-block text-overflow text-small text-secondary"
          title={plugin.description}>
          {plugin.description}
        </p>

        <div className="plugin-footer d-flex text-small text-secondary">
          <div
            className="plugin-version pr-3 pl-3 pt-2 pb-2"
            title="Plugin Version">
            <i className="las la-code-branch" /> {plugin.version}
          </div>
          <div
            className="plugin-downloads pr-3 pl-3 pt-2 pb-2"
            title="Plugin Downloads">
            <i className="las la-download" /> {plugin.downloads(period)}
          </div>
        </div>
      </div>
    </div>
  );
}

function PluginDocsLink() {
  return (
    <a
      href="https://support.insomnia.rest/article/26-plugins"
      className="create-plugin-link">
      Interested in making your own?
      <span className="emoji-swap default" role="img" aria-label="smirk">
        😏
      </span>
      <span className="emoji-swap on-hover" role="img" aria-label="heart eyes">
        😍
      </span>
    </a>
  );
}

function PluginSearchInput({ onChange }) {
  return (
    <div class="plugins-search">
      <input
        className="br-3 d-block w-50 pr-2 pt-2 pb-2"
        placeholder="Search Insomnia plugins..."
        onChange={onChange}
      />
      <span class="icon">
        <i class="la la-search" />
      </span>
    </div>
  );
}

function PluginOrderByDropdown({ onChange, defaultValue }) {
  return (
    <label className="mr-3">
      Order{' '}
      <select
        onChange={onChange}
        defaultValue={defaultValue === -1 ? 'asc' : 'desc'}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </label>
  );
}

function PluginSortByDropdown({ onChange, defaultValue, options }) {
  return (
    <label>
      Sort By{' '}
      <select onChange={onChange} defaultValue={defaultValue}>
        {Object.keys(options).map((value, index) => {
          return (
            <option value={value} key={value}>
              {options[value]}
            </option>
          );
        })}
      </select>
    </label>
  );
}

function Plugins(
  plugins,
  {
    sortOptions,
    sortBy,
    sortOrder,
    hasMore,
    onNext,
    onSearch,
    onSort,
    onOrderChange
  }
) {
  return (
    <div className="plugins">
      <div className="container fluid">
        <div className="row">
          <div className="col-6">
            <PluginSearchInput onChange={onSearch} />
          </div>
          <div className="col-6 pt-2">
            <div className="action-bar flex justify-end text-right text-xs">
              <PluginOrderByDropdown
                onChange={onOrderChange}
                defaultValue={sortOrder}
              />
              <PluginSortByDropdown
                onChange={onSort}
                defaultValue={sortBy}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <InfiniteScroll
              dataLength={plugins.length}
              next={onNext}
              hasMore={hasMore}
              hasChildren={plugins.length > 0}
              loader={Loader()}
              endMessage={NoMoreResults(plugins.length)}>
              {plugins.map(plugin =>
                PluginBox(plugin, 'lastYear', sortBy, sortOrder)
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class Component extends React.Component {
  constructor() {
    super();

    this.plugins = [];
    this.state = {
      plugins: [],
      total: 0,
      offset: 0,
      sortOrder: 1,
      sortBy: 'downloadsLastYear',
      sortOptions: {
        downloadsLastYear: 'Downloads',
        name: 'Name',
        releaseDate: 'Release Date'
      },
      trendingBy: 'lastWeek',
      hasMore: true,
      perScroll: 25
    };
  }

  componentDidMount() {
    const {
      allNpmPackage: { edges }
    } = this.props.data;

    this.plugins = edges.map(({ node: plugin }) => plugin);

    this.setState({
      total: this.plugins.length,
      hasMore: this.plugins.length > 0
    });

    this.sort();
    this.loadMore();
  }

  reset() {
    this.setState({
      plugins: [],
      offset: 0,
      hasMore: false
    });
  }

  search(evt) {
    let query = evt.target.value;

    if (!query) {
      this.reset();
      setTimeout(() => {
        this.loadMore();
      }, 1);
      return;
    }

    query = query.toLowerCase();

    this.setState({
      offset: 0,
      hasMore: false,
      plugins: this.plugins.filter(plugin => {
        return new Plugin(plugin).displayName.toLowerCase().indexOf(query) > -1;
      })
    });
  }

  sortByName() {
    this.plugins = this.plugins.sort((a, b) => {
      let an = new Plugin(a).displayName;
      let bn = new Plugin(b).displayName;
      return -an.localeCompare(bn);
    });
  }

  sortByReleaseDate() {
    this.plugins = this.plugins.sort((a, b) => {
      let x = new Date(a.npm.released);
      let y = new Date(b.npm.released);
      if (this.sortOrder === 1) {
        return x - y;
      } else {
        return y - x;
      }
    });
  }

  sortByDownloads(period) {
    this.plugins = this.plugins.sort((a, b) => {
      if (a.downloads[period] < b.downloads[period]) {
        return 1;
      } else if (a.downloads[period] > b.downloads[period]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  sort() {
    const { sortBy, sortOrder } = this.state;

    switch (sortBy) {
      case 'downloadsLastYear':
        this.sortByDownloads('lastYear');
        break;
      case 'name':
        this.sortByName();
        break;
      case 'releaseDate':
        this.sortByReleaseDate();
        break;
    }

    if (sortOrder === -1) {
      this.plugins = this.plugins.reverse();
    }
  }

  loadMore() {
    let { offset, plugins, perScroll, loading } = this.state;
    let nextOffset = offset + perScroll;
    let nextSet = this.plugins.slice(offset, nextOffset);
    if (loading) return;

    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        plugins: plugins.concat(nextSet),
        offset: nextOffset,
        hasMore: this.state.total > nextOffset,
        loading: false
      });
    }, Math.random() * 100);
  }

  onSort({ target: { value } }) {
    this.setState({
      sortBy: value
    });

    this.reset();

    setTimeout(() => {
      this.sort();
      setTimeout(() => this.loadMore(), 20);
    }, 1);
  }

  onOrderChange({ target: { value } }) {
    let order = value === 'asc' ? -1 : 1;

    this.setState({
      sortOrder: order
    });

    this.reset();

    setTimeout(() => {
      this.sort();
      this.loadMore();
    }, 20);
  }

  render() {
    return (
      <React.Fragment>
        {Header()}
        {Plugins(this.state.plugins, {
          sortOptions: this.state.sortOptions,
          sortBy: this.state.sortBy,
          sortOrder: this.state.sortOrder,
          hasMore: this.state.hasMore,
          onNext: this.loadMore.bind(this),
          onSearch: this.search.bind(this),
          onSort: this.onSort.bind(this),
          onOrderChange: this.onOrderChange.bind(this)
        })}
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query myQuery {
    allNpmPackage(
      filter: { meta: { unlisted: { eq: false }, core: { eq: false } } }
    ) {
      edges {
        node {
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
            description
            version
            released
            author {
              name
            }
            publisher {
              name
            }
            readme
          }
        }
      }
    }
  }
`;
