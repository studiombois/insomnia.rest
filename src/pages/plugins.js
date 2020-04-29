import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SocialCards from '../components/social-cards';

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
      <header className="text-center">
        <div className="row">
          <div className="col-12">
            <h1>Plugin Hub</h1>
            <p className="text-xl">Extend Insomnia with Powerful Plugins</p>
            <p className="text-sm">
              <a
                href="https://support.insomnia.rest/article/26-plugins"
                className="create-plugin-link">
                Interested in making your own?
                <span className="emoji-swap default">😏</span>
                <span className="emoji-swap on-hover">😍</span>
              </a>
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

function Plugin(pkg, period, sortBy, sortOrder) {
  let displayName = Plugin.getDisplayName(pkg);
  let description = Plugin.getDescription(pkg);
  let author = Plugin.getAuthor(pkg);

  return (
    <div
      className="plugin-wrapper shadow-sm br-8 mb-3 d-flex"
      key={pkg.name + sortBy + sortOrder}>
      <div className="plugin br-8 w-100 pr-3 pl-3 pt-3">
        <div className="plugin-header d-flex w-100">
          <div className="plugin-logo" />
          <div className="plugin-name">
            <a href={`/plugins/${pkg.name}`}>{displayName}</a>
          </div>
          <div className="plugin-info">
            <span className="text-small plugin-author">
              By <b>{author.name}</b>
            </span>
          </div>
        </div>

        <p
          className="plugin-content d-block mt-2 mb-3 text-overflow text-small text-secondary"
          title={pkg.npm.description}>
          {description}
        </p>

        <div className="plugin-footer d-flex nml-3 nmr-3 mb-0 text-small text-secondary">
          <div
            className="plugin-version pr-3 pl-3 pt-2 pb-2"
            title="Plugin Version">
            <i className="las la-code-branch" /> {pkg.npm.version}
          </div>
          <div
            className="plugin-downloads pr-3 pl-3 pt-2 pb-2"
            title="Plugin Downloads">
            <i className="las la-download" /> {pkg.downloads[period]}
          </div>
        </div>
      </div>
    </div>
  );
}

Plugin.getAuthor = pkg => {
  const author = pkg.npm.author ? pkg.npm.author : pkg.npm.publisher;
  const name = author.name || author.username;
  const email = author.email;

  return {
    name,
    email,
    avatar: {
      github: `https://github.com/${name}`,
      gravatar: `tbd`
    }
  };
};

Plugin.getDisplayName = pkg => {
  let displayName = pkg.meta.name || pkg.name;
  return displayName.replace(/^insomnia-plugin-/, '');
};

Plugin.getDescription = pkg => {
  return pkg.meta.description || pkg.npm.description;
};

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
      <div className="row">
        <div className="col-12">
          <input
            className="plugin-search br-3 text-lg d-block shadow w-100 pr-2 pl-2 pt-2 pb-2 mb-3"
            placeholder="Search Insomnia plugins..."
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="action-bar d-flex flex-center flex-content-end text-right text-xs">
            <label className="mr-3">
              Order{' '}
              <select
                onChange={onOrderChange}
                defaultValue={sortOrder === -1 ? 'asc' : 'desc'}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </label>

            <label>
              Sort By{' '}
              <select onChange={onSort} defaultValue={sortBy}>
                {Object.keys(sortOptions).map((value, index) => {
                  return (
                    <option value={value} key={value}>
                      {sortOptions[value]}
                    </option>
                  );
                })}
              </select>
            </label>
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
              Plugin(plugin, 'lastYear', sortBy, sortOrder)
            )}
          </InfiniteScroll>
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
        return (
          Plugin.getDisplayName(plugin)
            .toLowerCase()
            .indexOf(query) > -1
        );
      })
    });
  }

  sortByName() {
    this.plugins = this.plugins.sort((a, b) => {
      let an = Plugin.getDisplayName(a);
      let bn = Plugin.getDisplayName(b);
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
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <div className="container mb-5">
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
        </div>
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query myQuery {
    allNpmPackage(filter: { meta: { core: { eq: false } } }) {
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
            description
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
