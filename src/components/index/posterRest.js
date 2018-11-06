import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Component = ({intl}) => (
    <span>
        <FormattedMessage id="label" />
    </span>
);

Component.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(Component);

//    date: PropTypes.isRequired,
/*
import React from 'react'
//import { withIntl } from '../../i18n'
import { FormattedMessage } from 'react-intl'

export default (props) => (
    <span>{props.f(<FormattedMessage id="label" />)}</span>
)
*/