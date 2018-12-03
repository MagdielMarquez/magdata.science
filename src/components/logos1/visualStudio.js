import React from 'react'
import Base from './base'
import config from './config'
import Logo from '../../images/visualStudio.svg'

export default () => (
    <Base 
        src={Logo} 
        width={config.width} 
        height={config.height} 
        direction="botton"
        alt={config.visualStudioA}
        content={config.visualStudio} />
)