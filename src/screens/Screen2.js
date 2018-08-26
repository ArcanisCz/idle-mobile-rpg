import React, {Component} from "react";
import {Text} from 'react-native';

class Screen2 extends Component {
    static navigationOptions = {
        tabBarLabel: '2',
    };

    render(){
        return (
            <Text>Screen 2</Text>
        );
    }
}

export default Screen2;
