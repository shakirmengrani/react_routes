import React from 'react';
import store, { myHistory } from './store';
import { Provider, connect } from 'react-redux';
import {render} from 'react-dom';
import {Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';
import {Root} from './components/Root';
import {Home} from './components/Home';
import {About} from './components/About';
import {User} from './components/User';

class App extends React.Component{
    
    constructor(props){
        super(props);
        store.subscribe(() => { 
            // this.setState( store.getState()); 
            console.log("state changed",store.getState()); 
        } );
    }

    render(){
        var app = connect((store) => {
          return {
              user: store.user
          }
        });
        
        return (
            <Router history={myHistory}>
                <Route path={"/"} component={app(Root)}>
                    <IndexRoute component={app(Home)} />
                    <Route path={"home"} component={app(Home)}/>
                    <Route path={"user"} component={app(User)}/>
                    <Route path={"about"} component={app(About)}/>
                </Route>
            </Router>
        );
    }   
}

render(<Provider store={store}><App /></Provider>,window.document.getElementById("app"));