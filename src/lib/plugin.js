import crypto from 'crypto';
import moment from 'moment';

const PLUGIN_PREFIX = /^insomnia-plugin-/i;

class Plugin {
  constructor(pkg) {
    this.info = pkg;
    this.npm = this.info.npm;
    this.meta = this.info.meta;
  }

  downloads(period) {
    return (this.info.downloads[period] || 0).toLocaleString('en-US');
  }

  get publishedAgo() {
    return moment(this.npm.date).fromNow();
  }

  get lastModifiedDate() {
    return this.npm.date;
  }

  get releaseDate() {
    return this.npm.released;
  }

  get lastModifiedDateFormatted() {
    return moment(this.lastModifiedDate).format('MM/DD/YYYY');
  }

  get releaseDateFormatted() {
    return moment(this.releaseDate).format('MM/DD/YYYY');
  }

  get version() {
    return this.npm.version;
  }

  get name() {
    return this.info.name;
  }

  get displayName() {
    return (this.meta.displayName || this.meta.name || this.info.name)
      .replace(PLUGIN_PREFIX, '')
      .split('-')
      .join(' ');
  }

  get author() {
    return this.meta.publisher.name
      ? this.meta.publisher
      : this.npm.author
      ? this.npm.author
      : this.npm.publisher;
  }

  get authorEmailHash() {
    const author = this.author;
    const email = (author.email || '').trim().toLowerCase();
    return crypto
      .createHash('md5')
      .update(email)
      .digest('hex');
  }

  get authorIconGravatar() {
    return `https://gravatar.com/avatar/${this.authorEmailHash}?d=mp&f=y`;
  }

  get authorIconFallback() {
    return `https://avatars.dicebear.com/v2/bottts/${this.authorEmailHash}.svg`;
  }

  get authorName() {
    return this.author.name || this.author.username;
  }

  get authorIcon() {
    if (this.author.icon) {
      return this.author.icon;
    }

    if (this.npm.git.isGithub) {
      return `https://github.com/${this.npm.git.username}.png`;
    }

    return this.authorIconGravatar || this.authorIconFallback;
  }

  get description() {
    return this.meta.description || this.npm.description;
  }

  get readme() {
    return this.npm.readme;
  }

  get icon() {
    return this.meta.images.icon;
  }

  get coverImage() {
    return this.meta.images.cover;
  }

  get isBundle() {
    return this.meta.bundle;
  }

  get isCore() {
    return this.meta.core;
  }

  get isDeprecated() {
    return this.meta.deprecated;
  }

  get isCorePlugin() {
    return this.meta.applications.core;
  }

  get isDesignerPlugin() {
    return this.meta.applications.designer;
  }

  get homepageLink() {
    return this.npm.links && this.npm.links.homepage;
  }

  get npmDisplay() {
    return (
      this.npm.links &&
      decodeURIComponent(this.npm.links.npm.split('/package/')[1])
    );
  }

  get gitDisplay() {
    const { git } = this.npm;

    if (git.username) {
      return `${git.username}/${git.project}`;
    }

    return decodeURIComponent(git.url);
  }

  get hubLink() {
    return `/plugins/${this.name}`;
  }

  get coreDeepLink() {
    return `insomnia://plugins/install?name=${this.name}`;
  }

  get designerDeepLink() {
    return `insomniad://plugins/install?name=${this.name}`;
  }
}

export default Plugin;
