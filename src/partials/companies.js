import React from 'react';

import netflix from '../assets/customer-logos/logo-netflix.svg';
import kayak from '../assets/customer-logos/logo-kayak.svg';
import box from '../assets/customer-logos/logo-box.svg';
import cisco from '../assets/customer-logos/logo-cisco.svg';
import contacts1800 from '../assets/customer-logos/logo-1800.svg';
import logdna from '../assets/customer-logos/logo-logdna.svg';

const Companies = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '40rem',
      margin: 'auto'
    }}>
    {[netflix, kayak, box, cisco, contacts1800, logdna].map((svg, i) => (
      <div
        key={i}
        style={{
          display: 'inline-block',
          margin: '1rem 0'
        }}>
        <img src={svg} />
      </div>
    ))}
  </div>
);

export default Companies;
