import React from 'react'
import { withIntl } from '../i18n'
import Oil from '../images/oil.jpg'
import TextLoop from 'react-text-loop';
import Laucher from '../images/launching.jpg'
import Layout from '../components/layout/layout'
import { FormattedMessage as M} from 'react-intl'
import  Breadcrumb  from '../components/layout/breadcrumb'
import  Footer  from '../components/layout/footer'
import { Image } from 'office-ui-fabric-react/lib/Image'
import { Label } from 'office-ui-fabric-react/lib/Label'
import { Bread, Section } from '../styles/styles.components'
import { Welcome, WelcomeButton, Sub, SubA, SubAReverse, SubB, Readability, ReadabilityReverse, Blockquote, BlockquoteReverse } from '../styles/styles.components'

export default withIntl(
    () => (
        <Layout>
            <Bread>
                <Breadcrumb page="index"/>
            </Bread>
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
                <Sub>
                    <SubA>
                        <h1><M id="index_reason_title" /></h1>
                        <Readability>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </Readability>
                        <Readability>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </Readability>
                        <Blockquote>
                            <p>
                                Muy importante
                            </p>
                            <footer>
                                Importante
                            </footer>
                        </Blockquote> 
                    </SubA>
                    <SubB>
                        <Image
                            src={ Oil }
                            alt="Example implementation with no image fit property and only width is specified."
                            width={ 300 }
                            />
                        <Label>
                            <M id="label" />
                        </Label>
                    </SubB> 
                </Sub>
            </Section>
            <Section id="section-3">
                <Sub>
                    <SubB>
                        <Image
                            src={ Oil }
                            alt="Example implementation with no image fit property and only width is specified."
                            width={ 300 }
                            />
                        <Label>
                            <M id="label" />
                        </Label>
                    </SubB> 
                    <SubAReverse>
                        <h1><M id="index_reason_title" /></h1>
                        <ReadabilityReverse>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </ReadabilityReverse>
                        <ReadabilityReverse>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </ReadabilityReverse>
                        <BlockquoteReverse>
                            <p>
                                Muy importante
                            </p>
                            <footer>
                                Importante
                            </footer>
                        </BlockquoteReverse> 
                    </SubAReverse>
                </Sub>
            </Section>
            <Section id="section-4">
                <Sub>
                    <SubA>
                        <h1><M id="index_reason_title" /></h1>
                        <Readability>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </Readability>
                        <Readability>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quia voluptatibus reiciendis reprehenderit, aliquid enim expedita, 
                            eligendi in deleniti eum nostrum deserunt incidunt ex, labore ipsa a earum ut facere iste!
                        </Readability>
                        <Blockquote>
                            <p>
                                Muy importante
                            </p>
                            <footer>
                                Importante
                            </footer>
                        </Blockquote> 
                    </SubA>
                    <SubB>
                        <Image
                            src={ Oil }
                            alt="Example implementation with no image fit property and only width is specified."
                            width={ 300 }
                            />
                        <Label>
                            <M id="label" />
                        </Label>
                    </SubB> 
                </Sub>
            </Section>
            <Footer />
        </Layout>
    )
)
