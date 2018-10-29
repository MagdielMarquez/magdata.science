import React from 'react'
import Layout from '../components/layout/layout'
import { FormattedMessage as M} from 'react-intl'
import { withIntl } from '../i18n'
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';
//, Link 

export default withIntl(
    () => (
        <Layout>
            <section id="section-1">
                <Label>
                    <M id="label" />
                </Label>
                <Image
                    src="http://placehold.it/780x500"
                    alt="Example implementation with no image fit property and only width is specified."
                    />
            </section>
            <section id="section-2">
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
            </section>
            <section id="section-3">
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
            </section>
        </Layout>
    )
)