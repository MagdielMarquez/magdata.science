import React from 'react'
import theme from './theme'
import Header from './header'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import { initializeIcons } from '@uifabric/icons'
import { Customizer } from 'office-ui-fabric-react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
initializeIcons();

export default injectIntl(
    ({ children, intl }) => (
        <Customizer {...theme}>
            <Fabric>
                <Helmet
                    title={intl.formatMessage({ id: 'title' })}
                    meta={[
                        { name: 'description', content: intl.formatMessage({ id: 'welcome', defaultMessage:"Hola"  }) },
                        {
                            name: 'keywords',
                            content: 'gatsby, i18n, react-intl, multi language, localization',
                        },
                    ]}
                />
                <Header siteTitle={intl.formatMessage({ id: 'title' })} />
                <div>
                    { children }
                </div>
            </Fabric>
        </Customizer>
    )
)