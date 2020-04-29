import React from 'react';
import SocialCards from '../../components/social-cards';
import Contributors from '../../partials/contributors';
import Title from '../../partials/title';
import Link from '../../components/link';

const DownloadIcon = () => (
  <svg className="icon" viewBox="0 0 512 512">
    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
  </svg>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: ''
    };
  }

  componentDidMount() {
    const ref = encodeURIComponent(localStorage.signupSource || '');
    this.setState({ ref });
  }

  render() {
    const { ref } = this.state;

    const coreMacLink = `https://updates.insomnia.rest/downloads/mac/latest?ref=${ref}&app=com.insomnia.app`;
    const coreWinLink = `https://updates.insomnia.rest/downloads/windows/latest?ref=${ref}&app=com.insomnia.app`;
    const coreLinuxLink = `https://support.insomnia.rest/article/23-installation#ubuntu`;

    const designerMacLink = `https://updates.insomnia.rest/downloads/mac/latest?ref=${ref}&app=com.insomnia.designer`;
    const designerWinLink = `https://updates.insomnia.rest/downloads/windows/latest?ref=${ref}&app=com.insomnia.designer`;
    const designerLinuxLink = `https://support.insomnia.rest/article/90-installation#ubuntu`;

    return (
      <React.Fragment>
        <Title>Download</Title>
        <SocialCards
          title="Downloads | Insomnia"
          summary="Download Insomnia Applications"
          isBanner
        />
        <div className="row">
          <article className="col-6">
            <header className="container header--big">
              <div className="row">
                <div className="col-12">
                  <h2>Download Insomnia Core</h2>
                  <p className="text-md">
                    So you can finally <code>GET</code> some <code>REST</code>{' '}
                    😴
                  </p>
                </div>
              </div>
            </header>
            <section className="container padding-bottom">
              <div className="row center">
                <div className="col-4 platform-download">
                  <i className="platform-download__icon apple" />
                  <p>
                    <Link to={coreMacLink} className="button">
                      {DownloadIcon()} OS X 10.9+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    or <code>brew cask install insomnia</code>
                  </p>
                </div>
                <div className="col-4 platform-download">
                  <i className="platform-download__icon windows" />
                  <p>
                    <Link to={coreWinLink} className="button">
                      {DownloadIcon()} Windows 7+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    (64-bit only)
                  </p>
                </div>
                <div className="col-4 platform-download">
                  <i className="platform-download__icon linux bg-linux" />
                  <p>
                    <Link to={coreLinuxLink} className="button">
                      {DownloadIcon()} Ubuntu 14.04+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    or&nbsp;
                    <code style={{ lineBreak: 'no-wrap' }}>
                      sudo snap install insomnia
                    </code>
                    <br />
                    or&nbsp;
                    <Link to="https://support.insomnia.rest/article/23-installation#linux">
                      view other methods
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </article>
          <article className="col-6 col-md-12 light">
            <header className="container header--big">
              <div className="row">
                <div className="col-12">
                  <h2>Download Insomnia Designer</h2>
                  <p className="text-md">
                    Design your <code>REST</code> 😴
                  </p>
                </div>
              </div>
            </header>
            <section className="container padding-bottom">
              <div className="row center">
                <div className="col-4 platform-download">
                  <i className="platform-download__icon apple" />
                  <p>
                    <Link to={designerMacLink} className="button">
                      {DownloadIcon()} OS X 10.9+
                    </Link>
                  </p>
                </div>
                <div className="col-4 platform-download">
                  <i className="platform-download__icon windows" />
                  <p>
                    <Link to={designerWinLink} className="button">
                      {DownloadIcon()} Windows 7+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    (64-bit only)
                  </p>
                </div>
                <div className="col-4 platform-download">
                  <i className="platform-download__icon linux bg-linux" />
                  <p>
                    <Link to={designerLinuxLink} className="button">
                      {DownloadIcon()} Ubuntu 14.04+
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
        <Contributors />
      </React.Fragment>
    );
  }
}
