import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Language from './language'
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { intlShape, injectIntl } from "react-intl";

class SidebarMenu extends Component {
    static contextTypes = {
        language: PropTypes.object,
    }

    _onRenderGroupHeader(group) {
        return <h3>{group.name}</h3>;
    }

    render () {
        const intl = this.props.intl
        const pages = intl.formatMessage({ 
            id:'layout_sidebarMenu_title', 
            defaultMessage:intl.messages.layout_headerSideBar_title 
        }) 
        const home = intl.formatMessage({
            id:'layout_sidebarMenu_index', 
            defaultMessage:intl.messages.layout_headerSideBar_default
        })
        const about = intl.formatMessage({ 
            id:'layout_sidebarMenu_about', 
            defaultMessage:intl.messages.layout_headerSideBar_about 
        })
        const showcases = intl.formatMessage({ 
            id:'layout_sidebarMenu_resources', 
            defaultMessage:intl.messages.layout_headerSideBar_resources 
        })
        const resources = intl.formatMessage({
            id:'layout_sidebarMenu_showcases', 
            defaultMessage:intl.messages.layout_headerSideBar_showcases 
        })
        const experiences = intl.formatMessage({ 
            id:'layout_sidebarMenu_experiences', 
            defaultMessage:intl.messages.layout_headerSideBar_experiences 
        }) 
        return (
            <>
                <Nav 
                    onRenderGroupHeader={this._onRenderGroupHeader}
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
                    expandedStateText='expanded'
                    collapsedStateText='collapsed'
                    />
                <Language />
            </>
        )
    }
}
SidebarMenu.propTypes = {
    intl: intlShape.isRequired,
}
export default injectIntl(SidebarMenu)