import React, { Component } from 'react'
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import Logo from '../../images/logos/magdatascience.svg'
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import SidebarMenu from './sidebarMenu'
import { Head, HeaderLayer, HeaderLayerBrand } from '../../styles/styles.components'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { showPanel: false };
    }

    _showPanel = () => {
        this.setState({ showPanel: true });
    };

    _hidePanel = () => {
        this.setState({ showPanel: false });
    };

    render() {
        return (
            <Head>
                <HeaderLayer>
                    <HeaderLayerBrand to={'/'}>
                        <img 
                            src={Logo} 
                            width={48} 
                            height={48}
                            alt={'MagData.Science'} >
                        </img>
                    </HeaderLayerBrand>
                    <h1>
                        {this.props.siteTitle}
                    </h1>
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
                    <SidebarMenu />
                </Panel>
            </Head>
        )
    }
}