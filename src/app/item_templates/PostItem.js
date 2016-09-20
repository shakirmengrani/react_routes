import React from 'react';

export class PostItem extends React.Component{
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h3>{this.props.title}</h3></div>
                <div className="panel-body">
                <p>{this.props.description}</p>
                </div>
                <div className="panel-footer">
                {this.props.created_by}
                </div>
            </div>
        );
    }
}