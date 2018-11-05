import React, { Component } from 'react'
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import Scrollspy from 'react-scrollspy'
import { intlShape, injectIntl } from "react-intl";

class Bread extends Component {
    constructor(props) {
        super(props);
        const intl = this.props.intl
        const label_1 = intl.formatMessage({ 
            id:'index_breadcrumb_1', 
            defaultMessage:intl.messages.index_breadcrumb_1 
        })
        const label_2 = intl.formatMessage({ 
            id:'index_breadcrumb_2', 
            defaultMessage:intl.messages.index_breadcrumb_2 
        })
        const label_3 = intl.formatMessage({ 
            id:'index_breadcrumb_3', 
            defaultMessage:intl.messages.index_breadcrumb_3 
        })
        const label_4 = intl.formatMessage({ 
            id:'index_breadcrumb_4', 
            defaultMessage:intl.messages.index_breadcrumb_4 
        })
        this.state = {
            items:[
                { text: label_1, key: 'f1', href: "#section-1", onClick: this._onChangeOrdenOfItems },
                { text: label_4, key: 'f4', href: "#section-4", onClick: this._onChangeOrdenOfItems },
                { text: label_3, key: 'f3', href: "#section-3", onClick: this._onChangeOrdenOfItems },
                { text: label_2, key: 'f2', href: "#section-2", onClick: this._onChangeOrdenOfItems },
            ]
        }
    }
    
    // it is important don't change the var ev in this function
    _onChangeOrdenOfItems = (ev, item) => {
        let items = this.state.items.filter(element => (element.key!==item.key))
        items.push(this.state.items.find((element)=>element.key===item.key))
        this.setState({items})
    }

    render() {
        return (
            <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4'] } currentClassName="is-current">
                <Breadcrumb
                    items={ this.state.items }
                    ariaLabel={'Breadcrumb with no maxDisplayedItems'}
                    />
            </Scrollspy>
        )
    }
}
Bread.propTypes = {
    intl: intlShape.isRequired
};
export default injectIntl(Bread)