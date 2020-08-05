import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../session';
import {isLocalhost} from '../util';

import flow from '@prosperstack/flow';

class CancelLink extends React.Component {
  _handleClick = async e => {
    e.preventDefault();

    const { billingDetails } = this.props;

    const result = await flow({
      flowId: 'rYW54TKPDid0nTrlNw6rR',
      testMode: isLocalhost(),
      subscription: {
        paymentProviderId: billingDetails.subId,
      },
    })

    switch (result.status) {
      case 'canceled':
        // TODO: Better error handling/propagation to the user
        await session.cancelAccount();
        window.location.reload();

        break;

      case 'saved':
        // The customer accepted an offer and didn't cancel. Churn prevented!
        // For most offers, no further action is needed.
        break;

      case 'incomplete':
        // No action needed!
        break;
    }
  };

  render () {
    return <a href="#" onClick={this._handleClick}>Cancel Subscription</a>
  }
}

CancelLink.propTypes = {
  billingDetails: PropTypes.shape({
    subId: PropTypes.string.isRequired,
  }),
};


export default CancelLink;
