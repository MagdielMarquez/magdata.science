import React from 'react'
import Base from './base'
import config from './config'
import Logo from '../../images/simpleStatistics.jpg'

export default () => (
    <Base 
        src={Logo} 
        width={config.width} 
        height={config.height} 
        direction="botton"
        alt={config.simpleStatisticsA}
        content={config.simpleStatistics} />
)
