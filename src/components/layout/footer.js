import React, { Component } from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { PrimaryButton  } from 'office-ui-fabric-react/lib/Button'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { FooterLayer, Sub, SubA, SubB, Read, CardForm, CardFormBlock, CardFormButton, IconButtonInfo, CardFormMessages } from '../../styles/styles.components'
import { intlShape, injectIntl } from "react-intl";
import Facebook from '../logos/facebook'
import Linkedin from '../logos/linkedin'
import Github from '../logos/github'
import Twitter from '../logos/twitter'
import Medium from '../logos/medium'
import PropTypes from 'prop-types'

const gapSpace = { gapSpace: 0 }
const info = { iconName: 'Info' }
const re = /\S+@\S+\.\S+/

class Footer extends Component {
    static contextTypes = {
        language: PropTypes.object,
    }
    
    _labelEmail() { 
        const intl = this.props.intl
        const email = intl.formatMessage({ 
            id: 'layout_footer_contact_email', 
            defaultMessage: intl.messages.layout_footer_contact_email 
        }) 
        const email_tooltip = intl.formatMessage({ 
            id: 'layout_footer_contact_email_tooltip', 
            defaultMessage: intl.messages.layout_footer_contact_email_tooltip 
        })        
        return  <TooltipHost content={ email } id = "ContactLabelEmail" calloutProps={ gapSpace }>
                    <IconButtonInfo iconProps={ info } title={ email_tooltip } ariaLabel="Info" />
                    { email }
                </TooltipHost>
    }

    _labelSubject() {
        const intl = this.props.intl
        const subject = intl.formatMessage({ 
            id: 'layout_footer_contact_subject', 
            defaultMessage: intl.messages.layout_footer_contact_subject 
        }) 
        const subject_tooltip = intl.formatMessage({ 
            id: 'layout_footer_contact_subject_tooltip', 
            defaultMessage: intl.messages.layout_footer_contact_subject_tooltip 
        }) 
        return  <TooltipHost content={ subject } id = "ContactLabelSubject" calloutProps={ gapSpace }>
                    <IconButtonInfo iconProps={ info } title={ subject_tooltip } ariaLabel="Info" />
                    { subject }
                </TooltipHost>
    }

    _labelContent() {
        const intl = this.props.intl
        const content = intl.formatMessage({ 
            id: 'layout_footer_contact_content', 
            defaultMessage: intl.messages.layout_footer_contact_content 
        }) 
        const content_tooltip = intl.formatMessage({ 
            id: 'layout_footer_contact_content_tooltip', 
            defaultMessage: intl.messages.layout_footer_contact_content_tooltip 
        }) 
        return  <TooltipHost content={ content } id = "ContactLabelContent" calloutProps={ gapSpace }>
                    <IconButtonInfo iconProps={ info } title={ content_tooltip } ariaLabel="Info" />
                    { content }
                </TooltipHost>
    }

    _getErrorEmail(value) {
        return (re.test(value) ? '' : 'Invalid email')
    }

    _getErrorSubject(value) {
        return (value === '' ? 'Required field' : '')
    }

    _getErrorContent(value) {
        return (value === '' ? 'Required field' : '')
    }

    render () {
        const intl = this.props.intl
        const contact = intl.formatMessage({ 
            id:'layout_footer_contact_title', 
            defaultMessage:intl.messages.layout_footer_contact_title 
        }) 
        const message = intl.formatMessage({ 
            id:'layout_footer_contact_message', 
            defaultMessage:intl.messages.layout_footer_contact_message 
        }) 
        const email_placeholder = intl.formatMessage({ 
            id:'layout_footer_contact_email_placeholder', 
            defaultMessage:intl.messages.layout_footer_contact_email_placeholder 
        }) 
        const subject_placeholder  = intl.formatMessage({ 
            id:'layout_footer_contact_subject_placeholder', 
            defaultMessage:intl.messages.layout_footer_contact_subject_placeholder 
        }) 
        const content_placeholder  = intl.formatMessage({ 
            id:'layout_footer_contact_content_placeholder', 
            defaultMessage:intl.messages.layout_footer_contact_email_placeholder 
        }) 
        const send  = intl.formatMessage({ 
            id:'layout_footer_contact_button', 
            defaultMessage:intl.messages.layout_footer_contact_button 
        }) 
        return (
            <FooterLayer>
                <Sub>
                    <SubA>
                        <Read>
                            <h1>{ contact }</h1>
                            <CardForm action="https://formspree.io/magdielmarquezhernandez@gmail.com" method="POST">
                                <CardFormBlock>
                                    <TextField 
                                        name='email' 
                                        label={ this._labelEmail() } 
                                        required={ true } 
                                        placeholder={ email_placeholder } 
                                        onGetErrorMessage={ this._getErrorEmail } 
                                        validateOnLoad={false}
                                    />
                                    <TextField 
                                        name='subject' 
                                        label={ this._labelSubject() } 
                                        required={true} 
                                        placeholder={ subject_placeholder } 
                                        onGetErrorMessage={ this._getErrorSubject }  
                                        validateOnLoad={false}
                                    />
                                </CardFormBlock>
                                <CardFormBlock>
                                    <TextField 
                                        name='content' 
                                        type='text'
                                        label={ this._labelContent() } 
                                        multiline autoAdjustHeight 
                                        required={ true } 
                                        placeholder={ content_placeholder } 
                                        onGetErrorMessage={ this._getErrorContent }
                                        validateOnLoad={false}
                                    />
                                </CardFormBlock>
                                <CardFormButton>
                                    <PrimaryButton
                                        data-automation-id="test"
                                        text={ send } 
                                        allowDisabledFocus={ true }
                                        type="submit" 
                                        value="Send"
                                    />
                                </CardFormButton>
                            </CardForm>
                        </Read>
                    </SubA>
                    <SubB>
                        <CardFormMessages>
                            <p>{ message }</p>
                            <p>
                                <Facebook href={'https://facebook.com/magdielikari'} viewBox = '0 0 448 512' target='b' width={48} height={48} fill={'#fff'} />
                                <Linkedin href={'https://facebook.com/magdielikari'} viewBox = '0 0 448 512' target='b' width={48} height={48} fill={'#fff'} />
                                <Github href={'https://facebook.com/magdielikari'} viewBox = '0 0 448 512' target='b' width={48} height={48} fill={'#fff'} />
                                <Twitter href={'https://facebook.com/magdielikari'} viewBox = '0 0 448 512' target='b' width={48} height={48} fill={'#fff'} />
                                <Medium href={'https://facebook.com/magdielikari'} viewBox = '0 0 448 512' target='b' width={48} height={48} fill={'#fff'} />
                            </p>
                        </CardFormMessages>
                    </SubB>
                </Sub>
            </FooterLayer>
        )
    }
}
Footer.propTypes = {
    intl: intlShape.isRequired,
}
export default injectIntl(Footer)