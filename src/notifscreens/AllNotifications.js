import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/MaterialIcons';  

export default class AllNotifications extends Component{  
    render() {  
        return(  
            <View>  
                <Text style = {{color: "white"}}> all notifications</Text>  
            </View>  
        );
    }  
}  
    AllNotifications.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            
            <Icon  
                name={'notifications'}  
                color={tintColor}  
                size={25}  
            />  
            
        )  
}  