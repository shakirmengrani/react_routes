import React from 'react';

import {UserItem} from '../item_templates/UserItem';
import {LoginForm} from '../forms/LoginForm';
export class User extends React.Component{

    render(){
        let users = [
            {name: "Shakir Mengrani", image: "//placehold.it/200"}
        ]
        return (
            <div>
                <LoginForm onDispatch={this.props.dispatch} />
                {users.map((user,i)=><UserItem key={i} name={user.name} image={user.image} />)}
            </div>
        );
    }
}