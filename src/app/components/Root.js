import React from 'react';
import { Header } from "./Header";

export class Root extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let links = [
            {title: "Home", src: "/home"},
            {title: "User", src: "/user"},
            {title: "About", src: "/about"}
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header brand="React App" links={links}/>
                        <div className="row">
                            <div className="col-lg-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}