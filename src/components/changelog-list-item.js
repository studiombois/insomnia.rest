import React from 'react';

const PR_LINK_SEGMENTED_REGEX = /\(PR:(\d+)(:([^)]+))?\)/g;
const PR_LINK_REGEX = /(\(PR:\d+:[^)]+?\))/;

const ChangelogListItem = ({ text }) => {
  const matches = text.match(PR_LINK_SEGMENTED_REGEX);
  if (!matches?.length) {
    return text;
  }

  const replacements = {};
  let match;
  while (match = PR_LINK_SEGMENTED_REGEX.exec(text)) {
    const prNumber = match[1];
    const user = match[3] || '';
    const userString = (user ? ' by ' + user : '');
    const replacement = (
      <a href={`https://github.com/Kong/insomnia/pull/${prNumber}`} target="_blank">
        (#{prNumber}{userString})
      </a>
    );
    replacements[match[0]] = replacement;
  }

  const segments = text.split(PR_LINK_REGEX);
  return segments.reduce((fragments, curr) => {
    if (curr) { fragments.push(replacements[curr] || curr); }
    return fragments;
  }, []);
};

export default ChangelogListItem
