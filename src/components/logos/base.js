import React from 'react'
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip'

export default (props) => {
    const idd = 'M' + Math.floor((Math.random() * 10000) + 1);
    const calcPosition = (props) => {   
        return (props.direction === "top" ? props.height - 17 : 
                props.direction === "left" ? props.weigth - 13 : -13)
    }
    const calcDirection = (props) => {      
        return (props.direction === "top" ? DirectionalHint.topAutoEdge : 
                props.direction === "left" ? DirectionalHint.leftCenter :
                props.direction === "right" ? DirectionalHint.rightCenter : DirectionalHint.bottomAutoEdge)
    }
    return (
            <TooltipHost id={idd}
            content={props.content}
            calloutProps={{ gapSpace: calcPosition(props) }} 
            directionalHint={calcDirection(props)} >
                <img 
                    aria-describedby={idd}
                    src={props.src} 
                    width={props.width} 
                    height={props.height}
                    alt={props.alt} >
                </img>
            </TooltipHost>
    )
}

