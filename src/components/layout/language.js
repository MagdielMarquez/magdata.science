import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {intlShape, injectIntl} from "react-intl";

class Language extends Component {
    static contextTypes = {
        language: PropTypes.object,
    }

    state = {
        value: '',
    }

    componentDidMount() {
        const { language } = this.context
        this.setState({
            value: language.locale || language.detected,
        })
    }

    render() {
        const intl = this.props.intl
        const label = intl.formatMessage({ 
            id:'layout_language_messages', 
            defaultMessage:intl.messages.layout_language_messages 
        })
        const { language } = this.context
        const { languages } = language
        const { value } = this.state

        if (!value) {
            return null
        }

        return (
            <ChoiceGroup
                label={label}
                selectedKey={value}
                options={ 
                    languages.map( 
                        ({ value, text }) => {
                            return {
                                key: value,
                                value: value,
                                text: text,
                                iconProps: { iconName: 'LocaleLanguage' },
                                imageAlt: 'Locale Language',
                                imageSize: { width: 24, height: 24 },
                            }
                        }
                    )
                }
                onChange={this._handleChange}
            />
        )
    }

    _handleChange = event => {
        const { language } = this.context
        const { originalPath } = language
        const { value } = event.target

        if (value === this.state.value) {
            return
        }

        this.setState({ value }, () => {
            localStorage.setItem('language', value)
            window.location.href = `/${value}${originalPath}`
        })
    }
}
Language.propTypes = {
    intl: intlShape.isRequired
};
export default injectIntl(Language)