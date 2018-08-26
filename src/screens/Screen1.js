import React, {Component} from "react";
import {Text} from 'react-native';

class Screen1 extends Component {
    static navigationOptions = {
        tabBarLabel: '1',
    };

    render(){
        return (
            <Text>Screen 1</Text>
        );
    }
}

export default Screen1;
