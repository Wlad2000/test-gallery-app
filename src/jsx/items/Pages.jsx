/****************************************************************************
**
**
**
**
****************************************************************************/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "../pages/ListScreen";
import PhotoScreen from "../pages/PhotoScreen";


const Pages = (props) => {
    const Stack = createStackNavigator();

    const headerBar = {
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { color: 'gray' }
    };

    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={ListScreen} options={headerBar} />
            <Stack.Screen name="Photo" component={PhotoScreen} options={headerBar} />
        </Stack.Navigator>
    )
};

export { Pages };