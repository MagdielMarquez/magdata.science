import React, { Component } from 'react'
import { Link } from '../../i18n'
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import styled from "styled-components"
import Headroom from 'react-headroom'
import Logo from '../../images/magdatascience.svg'
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import SideBarMenu from './sideBarMenu'

const HeaderLayer = styled.div`
    display: flex;
    flex-flow: row wrap; 
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 17px 23px 10px 23px; 
`;

const HeaderLayerBrand = styled(Link)`
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-flow: column wrap; 
    align-content: center;
`;

const HeaderLayerBrandLogo = styled.img`
    align-self:center;
    margin-bottom: 0;
`;

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
                    <SideBarMenu />
                </Panel>
            </Headroom>
        )
    }
}