import React, { Component } from "react";
import { Text, FlatList, } from "react-native";
import { Comment } from './Comment';


class CommentFeed extends Component {
    _renderComment({ item }) {
       return <Comment item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderComment}
             />
        
        );        
    }
}


export default CommentFeed;