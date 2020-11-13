import React, {Component} from "react";

export default class User extends Component{
    constructor(props, context){
        super();
        this.state = {
            userName : props.user.userName,
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile
        }; //userName, password, email, mobile, street
    }

    onChangeText = (evt) =>{
        let target = evt.target; //core js way of reading the target we are typing in
        let classList = target.classList;
        let typedValue = target.value;
        //debugger;
        if (classList.contains("username")) {
            this.setState({
                userName:typedValue
            })
        } else if(classList.contains("pass")) {
            this.setState({
                password:typedValue
            }) 
        } else if(classList.contains("street")){
            this.setState({
                street: typedValue
            })
        } else if (target.value && target.value.length <= 11) {
            this.setState({
                mobile: typedValue
            })    
        }
    }

    LoginUser = (evt)=>{
        //alert("This needs to be implemented!")
        console.log("Payload Would be", this.state);
        this.props.loginUser(this.state);
    }
    
    //as we update the state in user reducer we need to update component when we recive it as props 
    //once broadcated by store
    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            userName: nextProps.user.userName,
            password: nextProps.user.password,
            street: nextProps.user.street,
            mobile: nextProps.user.mobile,
            _id:nextProps.user._id
        })
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                            placeholder="User Name" onChange={this.onChangeText} />
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password"
                            onChange={this.onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Street </b>
                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                          placeholder="Street Name"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={this.onChangeText} />
                    </div>
                    {this.props.user._id}
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={this.LoginUser}/>
                </div>
            </section>
        )
    }
}