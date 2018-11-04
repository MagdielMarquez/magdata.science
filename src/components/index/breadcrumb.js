import * as React from 'react';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import Scrollspy from 'react-scrollspy'

export class Bread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                { text: 'This is folder 2', key: 'f2', href: "#section-3", onClick: this._onChangeOrdenOfItems },
                { text: 'This is folder 1', key: 'f1', href: "#section-2",  onClick: this._onChangeOrdenOfItems },
                { text: 'Files', key: 'Files', href: "#section-1", onClick: this._onChangeOrdenOfItems },
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
            <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
                <Breadcrumb
                    items={ this.state.items }
                    ariaLabel={'Breadcrumb with no maxDisplayedItems'}
                    />
            </Scrollspy>
        )
    }
}