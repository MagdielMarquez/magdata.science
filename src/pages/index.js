import React from 'react'
import Layout from '../components/layout/layout'
import { FormattedMessage as M} from 'react-intl'
import { withIntl, Link } from '../i18n'

export default withIntl(
    () => (
        <Layout>
            <h1>
                <M id="hello" />
            </h1>
            <p>
                <M id="welcome" />
            </p>
            <p>
                <M id="build" />
            </p>
            <Link to="/page-2/">
                <M id="gopage2" />
            </Link>
        </Layout>
    )
)