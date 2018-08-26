import {createMaterialTopTabNavigator} from 'react-navigation';

import {Screen1, Screen2} from "./screens";

const Root = createMaterialTopTabNavigator({
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
},{
    lazy: true,
    optimizationsEnabled: true,
});

export default Root;
