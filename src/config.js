export const site = {
  shortName: 'Insomnia',
  name: 'Insomnia',
  description:
    'Leading Open Source API Client, and Collaborative API Design Platform for GraphQL, and REST',
  copyright: 'Kong Inc.',
  copyrightURL: 'https://konghq.com'
};

export const links = {
  download: '/download',
  rss: '/blog/index.xml'
};

export const menus = {
  header: {
    center: [
      {
        name: 'Docs',
        key: 'docs',
        url: 'https://support.insomnia.rest'
      },
      {
        name: 'Plugins',
        key: 'plugins',
        url: '/plugins/'
      },
      {
        name: 'Pricing',
        key: 'pricing',
        url: '/pricing/'
      }
    ],
    right: [
      {
        name: 'Account',
        key: 'account',
        url: '/app/account/',
        loggedIn: true
      },
      {
        name: 'Login',
        key: 'login',
        url: '/app/login/',
        loggedIn: false
      }
    ]
  },
  footer: {
    center: [
      {
        name: 'Support',
        key: 'support',
        url: '/support/'
      },
      {
        name: 'Slack',
        key: 'slack',
        url: 'https://chat.insomnia.rest'
      },
      {
        name: 'GitHub',
        key: 'github',
        url: 'https://github.com/Kong/insomnia'
      },
      {
        name: 'Twitter',
        key: 'twitter',
        url: 'https://twitter.com/GetInsomnia'
      },
      {
        name: 'Blog',
        key: 'blog',
        url: '/blog/'
      }
    ],
    right: [
      {
        name: 'Changelog',
        key: 'changelog',
        url: '/changelog/'
      },
      {
        name: 'Terms',
        key: 'terms',
        url: '/terms/'
      },
      {
        name: 'Privacy',
        key: 'privacy',
        url: '/privacy/'
      }
    ]
  }
};
