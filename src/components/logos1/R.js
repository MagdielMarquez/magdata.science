import React from 'react'
import Base from './base2'
import config from './config'
import Logo from '../../images/R.svg'

export default () => (
    <Base 
        src={Logo} 
        width={config.width} 
        height={config.height} 
        direction="botton"
        alt={config.RA}
        content={config.R} />
)