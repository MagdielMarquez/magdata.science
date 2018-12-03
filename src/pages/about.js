import React from 'react'
import { withIntl } from '../i18n'
import Layout from '../components/layout/layout'
import TimeLine from '../components/timeLine/timeLine'
import  Footer  from '../components/layout/footer'

export default withIntl(
    () => (
        <Layout>
            <TimeLine />
            <Footer />
        </Layout>
    )
)
