import React, {Component} from 'react';
import {Platform, View, Text, Button} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
    constructor(){
        super();
        this.state = {
            textValue:'click buttion to see!'
        };
	//this is for ES6 class
	this.onPress = this.onPress.bind(this);
	
	this.onPressArrow=()=>{
	    this.setState((p)=>{
	    if(p.textValue=="no click")
		p.textValue='clicked'
	    else
		p.textValue="no click"
	    return p;
        });

	};
    }

    onPress() {
        this.setState((p)=>{
	    if(p.textValue=="no click")
		p.textValue='clicked'
	    else
		p.textValue="no click"
	    return p;
        });
    }

     render(){
        return(
        <View>
            <Text>{instructions}</Text>
            <Text>{this.state.textValue}</Text>
            <Button title="click using member func with binding to this " onPress={this.onPress}/>
            <Button title="click use arrow function" onPress={this.onPressArrow}/>
        </View>
        );
    }
}
