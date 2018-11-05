import React from 'react'
import { withIntl } from '../../i18n'
import { FormattedMessage as M} from 'react-intl'

export default withIntl(
    () => (
        <span> 
            <M id="label" />
        </span>
    )
)