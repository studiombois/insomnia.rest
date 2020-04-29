import React from 'react';
import classnames from 'classnames';
import { links } from '../config';
import Link from './link';

const LINKS = {
  'com.insomnia.app': {
    mac: 'https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.app',
    win: 'https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app',
    other: '/download/core/',
  },
  'com.insomnia.designer': {
    mac: 'https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.designer',
    win: 'https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.designer',
    other: '/download/designer/',
  },
};

const NAMES = {
  'com.insomnia.app': 'Insomnia Core',
  'com.insomnia.designer': 'Insomnia Designer',
};

class DirectDownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: '__UNSET__',
      ref: '',
    };
  }

  componentDidMount() {
    const ref = encodeURIComponent(localStorage.signupSource || '');
    const isMobile = window.innerWidth <= 800 && window.innerHeight <= 600;
    this.setState({
      ref,
      platform: isMobile ? 'Mobile' : navigator.platform.toLowerCase(),
    });
  }

  render() {
    const { platform, ref } = this.state;
    const { className, children, app } = this.props;

    let platformName = null;
    let href = null;
    if (platform.indexOf('mac') !== -1) {
      platformName = 'Mac';
      href = LINKS[app].mac;
    } else if (platform.indexOf('win') !== -1) {
      platformName = 'Windows';
      href = LINKS[app].windows;
    } else {
      platformName = '';
      href = LINKS[app].other;
    }


    let message = 'Download';
    if (children) {
      message = children;
    } else if (platformName) {
      message = `${NAMES[app]} for ${platformName}`;
    }

    return (
      <div>
        <Link to={`${href}&ref=${ref}`} className={classnames('button', className)}>
          {message}
        </Link>
        <br />
        <p className="small pt-2">
          Not your OS? <Link to={LINKS[app].other}>All Downloads</Link>
        </p>
      </div>
    );
  }
}

export default DirectDownloadButton;
