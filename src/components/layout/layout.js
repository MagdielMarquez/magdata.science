import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Header from './headerSideBarMenu'
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Customizer } from 'office-ui-fabric-react';
import theme from './theme'
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
                {children}
            </div>
            </Fabric>
        </Customizer>
    )
)
/**
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
 */