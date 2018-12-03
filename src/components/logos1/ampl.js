import React from 'react'
import Base from './base'
import config from './config'
import Logo from '../../images/ampl.jpg'

export default () => (
    <Base 
        src={Logo} 
        width={config.width} 
        height={config.height} 
        direction="botton"
        alt={config.amplA}
        content={config.ampl} />
)