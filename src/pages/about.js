import React from 'react'
//import { FormattedMessage as M } from 'react-intl'
//, Link
import { withIntl } from '../i18n'
import Layout from '../components/layout/layout'
import TimeLine from '../components/timeLine/timeLine'
export default withIntl(
    () => (
        <Layout>
            <TimeLine />
        </Layout>
    )
)
