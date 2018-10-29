import React, { Component } from 'react'
import Language from './language'
import Headroom from 'react-headroom'
import Scrollspy from 'react-scrollspy'
import Logo from '../../images/magdatascience.svg'
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { HeaderLayer, HeaderLayerTitile, HeaderLayerBrand, HeaderLayerBrandLogo } from '../../styles/styles.components'
import {intlShape, injectIntl} from "react-intl";

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
        const home = intl.formatMessage({ id:'menu_default' })
        const home1 = intl.formatMessage({ id:'menu_default1' })
        const home2 = intl.formatMessage({ id:'menu_default2' })
        const home3 = intl.formatMessage({ id:'menu_default3' })
        const about = intl.formatMessage({ id:'menu_about' })
        const about1 = intl.formatMessage({ id:'menu_about1' })
        const about2 = intl.formatMessage({ id:'menu_about2' })
        const about3 = intl.formatMessage({ id:'menu_about3' })
        const showcases = intl.formatMessage({ id:'menu_showcases' })
        const showcases1 = intl.formatMessage({ id:'menu_showcases1' })
        const showcases2 = intl.formatMessage({ id:'menu_showcases2' })
        const showcases3 = intl.formatMessage({ id:'menu_showcases3' })
        const resources = intl.formatMessage({ id:'menu_resources' })
        const resources1 = intl.formatMessage({ id:'menu_resources1' })
        const resources2 = intl.formatMessage({ id:'menu_resources2' })
        const resources3 = intl.formatMessage({ id:'menu_resources3' })
        const experiences = intl.formatMessage({ id:'menu_experiences' }) 
        const experiences1 = intl.formatMessage({ id:'menu_experiences1' }) 
        const experiences2 = intl.formatMessage({ id:'menu_experiences2' }) 
        const experiences3 = intl.formatMessage({ id:'menu_experiences3' })   
        const pages = intl.formatMessage({ id:'menu_title' })   
        return (
            <Headroom>
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
                        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
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
                                                links: [
                                                    {
                                                        name: home1,
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: home2,
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: home3,
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.defaultExpanded,
                                            }, 
                                            {
                                                name: about,
                                                url: '/about',
                                                links: [
                                                    {
                                                        name: about1,
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: about2,
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: about3,
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.aboutExpanded,
                                            }, 
                                            {
                                                name: showcases,
                                                url: '/showcases',
                                                links: [
                                                    {
                                                        name: showcases1,
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: showcases2,
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: showcases3,
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.showcasesExpanded,
                                            }, 
                                            {
                                                name: resources,
                                                url: '/resources',
                                                links: [
                                                    {
                                                        name: resources1,
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: resources2,
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: resources3,
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.resourcesExpanded,
                                            },
                                            {
                                                name: experiences,
                                                url: '/experiences',
                                                links: [
                                                    {
                                                        name: experiences1,
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: experiences2,
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: experiences3,
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.experiencesExpanded,
                                            }
                                        ]
                                    }
                                ]}
                                expandedStateText={ 'expanded' }
                                collapsedStateText={ 'collapsed' }
                                />
                            <Language />
                        </Scrollspy>
                    </div>
                </Panel>
            </Headroom>
        )
    }
}
Header.propTypes = {
    intl: intlShape.isRequired
};
export default injectIntl(Header)