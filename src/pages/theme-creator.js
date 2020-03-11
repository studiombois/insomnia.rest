import React from 'react';
import SocialCards from '../components/social-cards';

import Link from '../components/link';
import Title from '../partials/title';
import ColorPicker from './color-picker';
import { Tab, Tabs } from 'react-tabify';

const themes = [
  'Default',
  'Success',
  'Notice',
  'Warning',
  'Danger',
  'Surprise',
  'Info',
];

const areas = [
  { label: 'Default', key: '' },
  { label: 'Pane', key: 'pane' },
  { label: 'Pane Header', key: 'paneHeader' },
  { label: 'Sidebar', key: 'sidebar' },
  { label: 'Sidebar header', key: 'sidebarHeader' },
];

const getRgba = (rgb, a) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;

const DEFAULT_INSOMNIA_THEME = {
  background: {
    default: '#282828',
    success: '#83a598',
    notice: '#b8bb26',
    warning: '#d79921',
    danger: '#eb5746',
    surprise: '#d3869b',
    info: '#83a598',
  },
  foreground: {
    default: '#ddd',
  },
  highlight: {
    default: 'rgba(130, 130, 130, 1)',
    xxs: 'rgba(130, 130, 130, 0.05)',
    xs: 'rgba(130, 130, 130, 0.1)',
    sm: 'rgba(130, 130, 130, 0.25)',
    md: 'rgba(130, 130, 130, 0.35)',
    lg: 'rgba(130, 130, 130, 0.5)',
    xl: 'rgba(130, 130, 130, 0.8)',
  },
  styles: {
    dialog: {},
    dialogFooter: {},
    dialogHeader: {},
    dropdown: {},
    editor: {},
    link: {},
    overlay: {},
    pane: {},
    paneHeader: {
      background: {
        default: '#303030',
      },
    },
    sidebar: {},
    sidebarHeader: {
      background: {
        default: '#8352cc',
      },
    },
    sidebarList: {},
    tooltip: {},
    transparentOverlay: {},
  },
};

export default class ThemeCreator extends React.Component {
  state = {
    theme: DEFAULT_INSOMNIA_THEME,
    displayName: 'My Custom Theme',
    name: 'custom-theme',
    activeKey: 0,
  };

  handleHighlightChange(color, areaName) {
    const { theme } = this.state;
    const { rgb } = color;

    const newHighlight = {
      default: getRgba(rgb, 1),
      xxs: getRgba(rgb, 0.05),
      xs: getRgba(rgb, 0.1),
      sm: getRgba(rgb, 0.25),
      md: getRgba(rgb, 0.35),
      lg: getRgba(rgb, 0.5),
      xl: getRgba(rgb, 0.8),
    };

    if (areaName) {
      const newTheme = {
        ...theme,
        styles: {
          ...theme.styles,
          [areaName]: {
            ...theme.styles[areaName],
            highlight: newHighlight,
          },
        },
      };

      this.setState({ theme: newTheme });
      return;
    }

    const newTheme = {
      ...theme,
      highlight: newHighlight,
    };

    this.setState({ theme: newTheme });
  }

  handleChange(color, areaName, layerName, themeName) {
    const hex = color.hex;
    const { theme } = this.state;

    if (areaName) {
      const newTheme = {
        ...theme,
        styles: {
          ...theme.styles,
          [areaName]: {
            ...theme.styles[areaName],
            [layerName]: {
              ...theme.styles[areaName][layerName],
              [themeName]: hex,
            },
          },
        },
      };

      this.setState({ theme: newTheme });
      return;
    }

    const newTheme = {
      ...theme,
      [layerName]: {
        ...theme[layerName],
        [themeName]: hex,
      },
    };

    this.setState({ theme: newTheme });
  }

  handleUpdateInput(e) {
    this.setState({
      displayName: e.target.value,
      name: e.target.value.toLowerCase().replace(' ', '-'),
    });
  }

  handleTabSelect = activeKey => {
    this.setState({ activeKey });
  };

  render() {
    const { activeKey, theme, displayName } = this.state;
    const colorClasses = 'col-3';
    const activeArea = areas[activeKey].key;
    const themeForArea = activeArea ? theme.styles[activeArea] : theme;

    return (
      <React.Fragment>
        <article>
          <Title>Theme Creator</Title>
          <SocialCards title="Insomnia" summary="Theme Creator" isBanner />

          <section className="container header--big run-in-container padding-bottom-lg padding-top">
            <div className="row">
              <div className="col-6">
                <h1>Theme Creator</h1>
                <p>Create a theme to use in Insomnia.</p>
                <ul>
                  <li>Install Insomnia 7.2.0+</li>
                  <li>Select your favorite colors 🎨</li>
                  <li>Click "Install"</li>
                  <li>Enjoy your new theme!</li>
                </ul>
              </div>
              <div className="col-6">
                <SvgPreview theme={theme} />
              </div>
            </div>
          </section>

          <section className="container header--big run-in-container">
            <Tabs activeKey={activeKey} onSelect={this.handleTabSelect}>
              {areas.map(({ label, key }) => (
                <Tab label={label} key={key} className="test">
                  <div className="padding-top-sm row">

                    <div className="col-6 ml-0">
                      <h1>Foreground</h1>
                      <div className="row">
                        <ColorPicker
                          label="Text"
                          className={colorClasses}
                          onChange={c => this.handleChange(c, activeArea, 'foreground', 'default')}
                          color={themeForArea.foreground ? themeForArea.foreground.default : undefined}
                        />
                      </div>
                    </div>

                    <div className="col-6 ml-0">
                      <h1>Highlight</h1>
                      <div className="row">
                        <ColorPicker
                          label="Base"
                          className={colorClasses}
                          onChange={c => this.handleHighlightChange(c, activeArea)}
                          color={themeForArea.highlight ? themeForArea.highlight.default : undefined}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="padding-top-sm">
                    <h1>Background</h1>
                    <div className="row">
                      {themes.map(t => (
                        <ColorPicker
                          key={t}
                          className={colorClasses}
                          label={t}
                          onChange={c => this.handleChange(c, activeArea, 'background', t.toLowerCase())}
                          color={themeForArea.background ? themeForArea.background[t.toLowerCase()] : undefined}
                        />
                      ))}
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
            <div className="right padding-top-sm form-row">
              <div className="form-control m-0 mr-1">
                <input type="text" defaultValue={displayName} onChange={e => this.handleUpdateInput(e)} />
              </div>
              <InstallButton theme={this.state} />
            </div>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

const SvgPreview = ({ theme }) => {
  const sidebar = theme.styles.sidebar;
  const sidebarH = theme.styles.sidebarHeader || {};
  const pane = theme.styles.pane || {};
  const paneH = theme.styles.paneHeader || {};

  return (
    <svg width="100%" height="100%" viewBox="0 0 500 300" style={{
      borderRadius: 5,
      overflow: 'hidden',
      boxShadow: `0 0 30px -10px ${theme.background.default}`,
    }}>
      <g fill={theme.background.default}>
        {/* Panes */}
        <g>
          <rect x="0" y="0" width="100%" height="100%" fill={(pane.background || {}).default} />
          <rect
            x="25%"
            y="0"
            width="100%"
            height="10%"
            fill={(paneH.background || {}).default}
          />
        </g>

        {/* Sidebar */}
        <g>
          <rect x="0" y="0" width="25%" height="100%" fill={(sidebar.background || {}).default} />
          <rect
            x="0"
            y="0"
            width="25%"
            height="10%"
            fill={(sidebarH.background || {}).default}
          />
        </g>

        {/* Lines */}
        <line x1="25%" x2="100%" y1="10%" y2="10%" strokeWidth="1" stroke={theme.highlight.md} />
        <line x1="62%" x2="62%" y1="0" y2="100%" strokeWidth="1" stroke={theme.highlight.md} />
        <line x1="25%" x2="25%" y1="0" y2="100%" strokeWidth="1" stroke={theme.highlight.md} />
        <line x1="0" x2="25%" y1="10%" y2="10%" strokeWidth="1" stroke={theme.highlight.md} />

        {/* Colors */}
        <rect x="30%" y="85%" width="5%" height="8%" fill={theme.background.default} />
        <rect x="40%" y="85%" width="5%" height="8%" fill={theme.background.success} />
        <rect x="50%" y="85%" width="5%" height="8%" fill={theme.background.notice} />
        <rect x="60%" y="85%" width="5%" height="8%" fill={theme.background.warning} />
        <rect x="70%" y="85%" width="5%" height="8%" fill={theme.background.danger} />
        <rect x="80%" y="85%" width="5%" height="8%" fill={theme.background.surprise} />
        <rect x="90%" y="85%" width="5%" height="8%" fill={theme.background.info} />
      </g>
    </svg>
  );
};

const InstallButton = ({ theme }) => {
  const url = `insomnia://plugins/theme?theme=${encodeURIComponent(JSON.stringify(theme))}`;

  return (
    <Link to={url} className="button m-0 ml-1" style={{ maxWidth: '150px' }}>
      Install Theme
    </Link>
  );
};
