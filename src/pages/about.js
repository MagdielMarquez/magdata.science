import React from 'react'
import { FormattedMessage as M } from 'react-intl'
import { withIntl, Link } from '../i18n'
import Layout from '../components/layout/layout'

export default withIntl(
    () => (
        <Layout>
            <h1>
                <M id="hello" />
            </h1>
            <p>
                <M id="welcome2" />
            </p>
            <Link to="/">
                <M id="goback" />
            </Link>
        </Layout>
    )
)
