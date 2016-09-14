import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export const Header = (props) => {
     let userLink = "";
     if (props.username){
         userLink = (
             <li><a href="#">{props.username}</a></li>
         );
     }   
    return (
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><a className="navbar-brand" href="#">{props.brand}</a></li>
                                {props.links.map((item,i) => <li key={i}><Link to={item.src} target={item.target}>{item.title}  - 'test'</Link></li>)}
                            </ul>
                            <ul className="nav navbar-nav mavbar-right">
                                {userLink}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
