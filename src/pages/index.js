import React from 'react'
import Layout from '../components/layout/layout'
import { FormattedMessage as M} from 'react-intl'
import { withIntl } from '../i18n'
import { Label } from 'office-ui-fabric-react/lib/Label'
import Welcome from '../components/index/welcome'
import { Image } from 'office-ui-fabric-react/lib/Image'
import  Bread  from '../components/index/breadcrumb'
import { Breadcrumb, Section } from '../styles/styles.components'
import Justification from '../components/index/justification'

export default withIntl(
    () => (
        <Layout>
            <Breadcrumb>
                <Bread />
            </Breadcrumb>
            <Section id="section-1">
                <Welcome />
            </Section>
            <Section id="section-2">
                <h1>
                    <M id="hello" />
                </h1>
                <Justification />
                <Label>
                    <M id="label" />
                </Label>
                <Image
                    src="http://placehold.it/780x500"
                    alt="Example implementation with no image fit property and only width is specified."
                    />
            </Section>
            <Section id="section-3">
                <h1>
                    <M id="hello" />
                </h1>
                <Label>
                    <M id="label" />
                </Label>
                <Image
                    src="http://placehold.it/780x500"
                    alt="Example implementation with no image fit property and only width is specified."
                    />
            </Section>
            <Section id="section-4">
                <h1>
                    <M id="hello" />
                </h1>
                <Label>
                    <M id="label" />
                </Label>
                <Image
                    src="http://placehold.it/780x500"
                    alt="Example implementation with no image fit property and only width is specified."
                    />
            </Section>
        </Layout>
    )
)
