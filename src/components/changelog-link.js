import React from 'react';
import Link from './link';

const ChangelogLink = ({ children, frontmatter }) => {
  const app = frontmatter.app === 'com.insomnia.designer' ? 'designer' : 'core';
  return (
    <Link to={`/changelog/${app}/${frontmatter.slug}`}>
      {children || frontmatter.title}
    </Link>
  );
};

export default ChangelogLink;
