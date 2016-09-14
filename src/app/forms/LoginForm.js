import React from 'react';
import * as user from '../actions/userAction';
export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }    
    handleChanges(evt){
        this.setState({ 
            username: (evt.target.name == "username" ? evt.target.value : this.state.username), 
            password: (evt.target.name == "password" ? evt.target.value : this.state.password) 
        });
    }


    onLogin(){
        this.props.onDispatch(user.setName(this.state.username));
    }
    
    render(){
        return(
            <div className="container">
             <div className="row">
                <div className="col-xs-10 form-group">
                    <label className="sr-only">Enter Username</label>
                    <input type="text" name="username" value={this.state.username} className="form-control" placeholder="Enter Username" onChange={(evt) => this.handleChanges(evt)}/>
                </div>
             </div>
             <div className="row">
                <div className="col-xs-10 form-group">
                    <label className="sr-only">Enter Password</label>
                    <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={(evt) => this.handleChanges(evt)}/>
                </div>
             </div>
             <div className="row">
                <div className="col-xs-10 form-group">
                    <button onClick={this.onLogin.bind(this)} className="btn btn-primary btn-sm">Login</button>
                </div>
             </div>
            </div>
        );
    }
}