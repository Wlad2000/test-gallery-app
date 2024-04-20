/****************************************************************************
**
**
**
**
****************************************************************************/
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Pages } from './items/Pages';
import { Provider } from 'react-redux';
import store from './store/index';


const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Pages />
            </NavigationContainer >
        </Provider>

    );
};

export default App;
