import React from 'react'
import TextLoop from 'react-text-loop';
import Laucher from '../../images/launching.jpg'
import { Image } from 'office-ui-fabric-react/lib/Image'
import { Welcome, WelcomeButton } from '../../styles/styles.components'
//import PosterRest from './posterRest'

export default () => (
    <Welcome>
        <Image
            src={Laucher}
            alt="Example implementation with no image fit property and only width is specified."
            width={window.innerWidth-16}
            height={window.innerHeight-71}
            
        />
        <h2>
            <TextLoop>
                <div>First item </div>
                <div>Second item </div>
                <div>Third item </div>
            </TextLoop> 
                <span> and something else.</span>
            <br/>
            <WelcomeButton 
                data-automation-id="test"
                iconProps={{ iconName: 'AddFriend' }}
                ariaDescription="This is aria description used for screen reader."
                href="/contact"
            >
                Create account
            </WelcomeButton>        
        </h2>
    </Welcome>
)

// <span> and something else.</span>
//<PosterRest />