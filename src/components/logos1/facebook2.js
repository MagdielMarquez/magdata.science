import React from 'react'
import Logo from '../../images/logos/facebook.svg'

export default (props) => {
    return (
        <img 
        aria-describedby={'Facebook'}
        src={Logo} 
        width={props.width} 
        height={props.height}
        alt={props.alt} 
        fill={'#fff'}/>
    )
}
