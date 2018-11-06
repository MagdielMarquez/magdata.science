import React from 'react'
import { withIntl } from '../i18n'
import Oil from '../images/oil.jpg'
import TextLoop from 'react-text-loop';
import Laucher from '../images/launching.jpg'
import Layout from '../components/layout/layout'
import { FormattedMessage as M} from 'react-intl'
import  Bread  from '../components/index/breadcrumb'
import { Image } from 'office-ui-fabric-react/lib/Image'
import { Label } from 'office-ui-fabric-react/lib/Label'
import { Breadcrumb, Section } from '../styles/styles.components'
import { Welcome, WelcomeButton } from '../styles/styles.components'

export default withIntl(
    () => (
        <Layout>
            <Breadcrumb>
                <Bread />
            </Breadcrumb>
            <Section id="section-1">
                <Welcome>
                    <Image
                        src={ Laucher }
                        alt="Example implementation with no image fit property and only width is specified."
                        width={ window.innerWidth-16 }
                        height={ window.innerHeight-71 }
                        
                    />
                    <h2>
                        <span><M id="index_welcome_preTitle" /></span>
                        <TextLoop>
                            <span><M id="index_welcome_option1" /></span>
                            <span><M id="index_welcome_option2" /></span>
                            <span><M id="index_welcome_option3" /></span>
                        </TextLoop> 
                        <span><M id="index_welcome_postTitle" /></span>
                        <div><M id="index_welcome_subTitle" /></div>
                        <WelcomeButton 
                            iconProps={{ iconName: 'ConnectContacts' }}
                            ariaDescription="This is aria description used for screen reader."
                            href="/contact"
                        >
                           <M id="index_welcome_contact" />
                        </WelcomeButton>        
                    </h2>
                </Welcome>
            </Section>
            <Section id="section-2">
                <h1>
                    <M id="index_reason_title" />
                </h1>
                <Image
                    src={ Oil }
                    alt="Example implementation with no image fit property and only width is specified."
                />
                <Label>
                    <M id="label" />
                </Label>
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
