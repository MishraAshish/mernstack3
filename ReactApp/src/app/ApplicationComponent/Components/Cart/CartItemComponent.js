import React, {Component} from "react";

export default class CartItemComponent extends Component{

    constructor(props, context){
        super();
        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        });
    }

    //es next
    onChangeQuantity = (e) => {
        // target is input element, real dom element
        let target = e.target;
        this.setState({
            qty: target.value
        })
    }


    render() {
        console.log("CartItem render", this.props.item.id);         
        let {item} = this.props;
        return(
            <tr>
                <td>{item.name}</td>
                
                <td>{item.price}</td>
                
                <td>
                    {this.props.donotMakeEditable ?
                        this.state.qty
                        :
                        <input value={this.state.qty} 
                            type="number"
                            onChange={this.onChangeQuantity}                        
                        />                
                    }
                </td> 
                
                <td> {item.price * item.qty} </td>
                <td>
                    {this.props.donotMakeEditable ?
                    " "
                    :
                    <React.Fragment>
                        <button onClick={() => this.props.actions.updateItem(item.id, this.state.qty)}>
                            Update
                        </button>
                        <button onClick={() => this.props.actions.removeItem(item.id)}>
                            Remove
                        </button>
                    </React.Fragment>
                }
                </td>
            </tr>
        )
    }
}