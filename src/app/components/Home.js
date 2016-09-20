import React from 'react';
import { add_tweet } from '../actions/tweetAction';
import {PostItem} from '../item_templates/PostItem';
export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tweet:{
                title: "",
                text: ""
            }
        }
    }

    componentWillMount(){

    }

    onBtnAddClick(){
        this.props.dispatch(add_tweet(this.state.tweet.title,this.state.tweet.text,this.props.user.name));
    }

    handleOnChange(e){  
        this.setState({
            tweet:{
                title: e.target.name == "txt_title" ? e.target.value : this.state.tweet.title,
                text: e.target.name == "txt_text" ? e.target.value : this.state.tweet.text
            }
        });
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 form-group">
                        <label>Title</label>
                        <input type="text" name="txt_title" className="form-control" value={this.state.tweet.title} onChange={(e) => this.handleOnChange(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 form-group">
                        <label>Text</label>
                        <input type="text" name="txt_text" className="form-control" value={this.state.tweet.text} onChange={(e) => this.handleOnChange(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 form-group">
                        <button className="btn" onClick={() => this.onBtnAddClick()} > Add Tweet</button>
                    </div>
                </div>
                <hr />
                {this.props.posts.map((post,i) => <PostItem key={i} title={post.title} description={post.text} created_by={post.created_by} />)}
            </div>
        );
    }
}