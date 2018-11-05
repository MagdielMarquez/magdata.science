import React, { Component } from 'react'
import Language from './language'
import Logo from '../../images/logos/magdatascience.svg'
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Head, HeaderLayer, HeaderLayerTitile, HeaderLayerBrand, HeaderLayerBrandLogo } from '../../styles/styles.components'
import { intlShape, injectIntl } from "react-intl";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            showPanel: false,
            defaultExpanded: (window.location.pathname.substring(3) === '/' ? true : false),
            aboutExpanded: (window.location.pathname.substring(3) === '/about/' ? true : false),
            showcasesExpanded: (window.location.pathname.substring(3) === '/experiences/' ? true : false),
            resourcesExpanded: (window.location.pathname.substring(3) === '/resources/' ? true : false),
            experiencesExpanded: (window.location.pathname.substring(3) === '/showcases/' ? true :false),
        };
    }

    _showExpanded = (obj) => {
        this.setState(obj)
    }

    _showPanel = () => {
        this.setState({ showPanel: true })
    };

    _hidePanel = () => {
        this.setState({ showPanel: false })
    };

    render() {
        const intl = this.props.intl
        const home = intl.formatMessage({
            id:'layout_headerSideBar_default', 
            defaultMessage:intl.messages.layout_headerSideBar_default
        })
        const about = intl.formatMessage({ 
            id:'layout_headerSideBar_about', 
            defaultMessage:intl.messages.layout_headerSideBar_about 
        })
        const showcases = intl.formatMessage({ 
            id:'layout_headerSideBar_resources', 
            defaultMessage:intl.messages.layout_headerSideBar_resources 
        })
        const resources = intl.formatMessage({
            id:'layout_headerSideBar_showcases', 
            defaultMessage:intl.messages.layout_headerSideBar_showcases 
        })
        const experiences = intl.formatMessage({ 
            id:'layout_headerSideBar_experiences', 
            defaultMessage:intl.messages.layout_headerSideBar_experiences 
        }) 
        const pages = intl.formatMessage({ 
            id:'layout_headerSideBar_title', 
            defaultMessage:intl.messages.layout_headerSideBar_title 
        })   
        return (
            <Head>
                <HeaderLayer>
                    <HeaderLayerBrand to={'/'}>
                        <HeaderLayerBrandLogo 
                            src={Logo} 
                            width={48} 
                            height={48}
                            alt={'MagData.Science'} >
                        </HeaderLayerBrandLogo>
                    </HeaderLayerBrand>
                    <HeaderLayerTitile>
                        {this.props.siteTitle}
                    </HeaderLayerTitile>
                    <IconButton
                        iconProps={{ iconName: 'ChevronLeftEnd6' }}
                        title="Emoji"
                        ariaLabel="Emoji"
                        onClick={this._showPanel} 
                        />
                </HeaderLayer>
                <Panel
                    isOpen={this.state.showPanel}
                    isLightDismiss={true}
                    onDismiss={this._hidePanel}
                    >
                    <div className='SidebarMenu'>
                        <Nav 
                            onRenderGroupHeader={(group) => {
                                return <h3>{group.name}</h3>;
                            }}
                            groups={[
                                {
                                    name: pages,
                                    links: [
                                        {
                                            name: home,
                                            url: '/',
                                        }, 
                                        {
                                            name: about,
                                            url: '/about',
                                        }, 
                                        {
                                            name: showcases,
                                            url: '/showcases',
                                        }, 
                                        {
                                            name: resources,
                                            url: '/resources',
                                        },
                                        {
                                            name: experiences,
                                            url: '/experiences',
                                        }
                                    ]
                                }
                            ]}
                            expandedStateText={ 'expanded' }
                            collapsedStateText={ 'collapsed' }
                            />
                        <Language />
                    </div>
                </Panel>
            </Head>
        )
    }
}
Header.propTypes = {
    intl: intlShape.isRequired
};
export default injectIntl(Header)