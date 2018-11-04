import React from 'react'
import TextLoop from 'react-text-loop';
import { Image } from 'office-ui-fabric-react/lib/Image'
import Laucher from '../../images/launching.jpg'
import {WelcomeTitle, Welcome} from '../../styles/styles.components'

export default () => (
    <Welcome>
        <Image
            src={Laucher}
            alt="Example implementation with no image fit property and only width is specified."
            width={window.innerWidth-16}
            height={window.innerHeight-71}
            
        />
        <WelcomeTitle>
            <TextLoop>
                <span>First item</span>
                <span>Second item</span>
                <div>Third item</div>
            </TextLoop> 
            and something else.
        </WelcomeTitle>
    </Welcome>
)