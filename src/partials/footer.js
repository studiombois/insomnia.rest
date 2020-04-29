import React from 'react';
import { links, menus, site } from '../config';
import Link from '../components/link';
import iconSrc from '../assets/icon.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-4">
            <div className="footer__branding">
              <img className src={iconSrc} alt="Insomnia REST Client logo" />
              <span>&copy; {new Date().getUTCFullYear()}&nbsp;</span>
              <Link to={site.copyrightURL} target="_blank">
                {site.copyright}
              </Link>
            </div>
          </div>
          <div className="col-4">
            <p className="footer__menu">
              {menus.footer &&
                menus.footer.center.map(item => (
                  <Link key={item.key} to={item.url}>
                    {item.name}
                  </Link>
                ))}
            </p>
          </div>
          <div className="col-4">
            <p className="footer__menu">
              {menus.footer &&
                menus.footer.right.map(item => (
                  <Link key={item.key} to={item.url}>
                    {item.name}
                  </Link>
                ))}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
