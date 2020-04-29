import React from 'react';
import classnames from 'classnames';
import DownloadLink from './download-link';

export default function DownloadButton(props) {
  return (
    <DownloadLink className={classnames('button', props.className)}>
      {props.children}
    </DownloadLink>
  );
}
