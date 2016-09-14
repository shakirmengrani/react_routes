import React from 'react';
import { fetchUserState, setName } from '../actions/userAction';

export class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      this.props.dispatch(fetchUserState());     
    }

    onChangeName (){
        this.props.dispatch(setName("Shakir Commando"));
    }

    render(){       
        return (
            <div>
                <h3>{this.props.user.name}</h3>
                <hr />
                <button onClick={this.onChangeName.bind(this)} className="btn btn-primary">Change Useranme</button>
            </div>
        );
    }
}