import React from 'react'
import PropTypes from 'prop-types'
import { IconsLinks, IconsLinksvg } from '../../styles/styles.components'

const Logos = (props) => {
    const { viewBox, fill, width, height, children, href, target } = props
    const target_A = (target === 'b' ? '_blank' :
        target === 's' ? '_self' : 
        target === 'p' ? '_parent' :
        target === 't' ? '_top' : 'framename')
    return (
        <IconsLinks 
            href={ href } 
            target={ target_A }
        >
            <IconsLinksvg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={ viewBox }
                fill={ fill } 
                width={ width } 
                height={ height }
            >
                { children }
            </IconsLinksvg>
        </IconsLinks>
    )
}

Logos.propType = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['b', 's', 'p', 't']),
    children: PropTypes.element.isRequired
}

export default Logos