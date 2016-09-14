import React from 'react';

export class UserItem extends React.Component{

    render(){
        let h3Style = {"textAlign":"center"};
        return (
            <div className="col-md-3">
                <img className="img img-responsive thumbnail" src={this.props.image} />
                <h3 style={h3Style}>{this.props.name}</h3>
            </div>
        );
    }
}