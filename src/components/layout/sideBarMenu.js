import React from 'react'
import {Nav} from 'office-ui-fabric-react/lib/Nav'
//import { initializeIcons } from '@uifabric/icons';
import Scrollspy from 'react-scrollspy'
import Language from './language'

//initializeIcons()

const SidebarMenu = ({groups, expanded, collapsed, _onRenderGroupHeader}) => (
    <div className='SidebarMenu'>
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
            <Nav 
                onRenderGroupHeader={_onRenderGroupHeader}
                groups={groups}
                expandedStateText={expanded}
                collapsedStateText={collapsed}
                />
            <Language />
        </Scrollspy>
    </div>
)

SidebarMenu.defaultProps = {
    groups: [
        {
            name: 'Pages',
            links: [
                {
                    name: 'Home',
                    url: '/main',
                    links: [
                        {
                            name: 'Activity',
                            url: '#section-1',
                        },
                        {
                            name: 'News',
                            url: '#section-2',
                        },
                        {
                            name: 'News',
                            url: '#section-3',
                        }
                    ],
                    isExpanded: true,
                }, 
                {
                    name: 'Documents',
                    url: '/',
                }, 
                {
                    name: 'Edit Link',
                    url: 'http://example.com',
                    iconClassName: 'ms-Icon--Edit',
                }, 
                {
                    name: 'Edit',
                    url: '#',
                    icon: 'Edit',
                    onClick: () => {},
                }
            ]
        }
    ],
    expanded: 'expanded',
    collapsed: 'collapsed',
    _onRenderGroupHeader(group) {
        return <h3>{group.name}</h3>;
    }
}

export default SidebarMenu