import React, { Component } from 'react'
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import Headroom from 'react-headroom'
import Logo from '../../images/magdatascience.svg'
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import {Nav} from 'office-ui-fabric-react/lib/Nav'
import Scrollspy from 'react-scrollspy'
import Language from './language'
import { HeaderLayer, HeaderLayerBrand, HeaderLayerBrandLogo } from '../../styles/styles.components'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            showPanel: false,
            defaulExpanded: (window.location.pathname.substring(3) === '/' ? true : false),
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
        return (
            <Headroom>
                <HeaderLayer>
                    <HeaderLayerBrand to={'/main'}>
                        <HeaderLayerBrandLogo 
                            src={Logo} 
                            width={32} 
                            height={32}
                            alt={'MagData.Science'} >
                        </HeaderLayerBrandLogo>
                    </HeaderLayerBrand>
                    {this.props.siteTitle}
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
                                        name: 'Pages',
                                        links: [
                                            {
                                                name: 'Home',
                                                url: '/',
                                                links: [
                                                    {
                                                        name: 'Activity',
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.defaulExpanded,
                                            }, 
                                            {
                                                name: 'About',
                                                url: '/about',
                                                links: [
                                                    {
                                                        name: 'Activity',
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.aboutExpanded,
                                            }, 
                                            {
                                                name: 'Showcases',
                                                url: '/showcases',
                                                links: [
                                                    {
                                                        name: 'Activity',
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.showcasesExpanded,
                                            }, 
                                            {
                                                name: 'Resources',
                                                url: '/resources',
                                                links: [
                                                    {
                                                        name: 'Activity',
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-3',
                                                        onClick: this._hidePanel
                                                    }
                                                ],
                                                isExpanded: this.resourcesExpanded,
                                            },
                                            {
                                                name: 'Experiences',
                                                url: '/experiences',
                                                links: [
                                                    {
                                                        name: 'Activity',
                                                        url: '#section-1',
                                                        onClick: this._hidePanel,
                                                    },
                                                    {
                                                        name: 'News',
                                                        url: '#section-2',
                                                        onClick: this._hidePanel
                                                    },
                                                    {
                                                        name: 'News',
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