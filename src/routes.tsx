import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import ListProduct from './pages/ListProduct';
import ListCart from "./pages/ListCart";
import SettingsProductList from "./pages/Settings/ProductList";

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'My home' }}
                />
                <AppStack.Screen
                    name="Products"
                    component={ListProduct}
                    // @ts-ignore
                    options={({ route }) => ({ title: route.params.name })}
                />
                <AppStack.Screen
                    name="Cart"
                    component={ListCart}
                    // @ts-ignore
                    options={({ route }) => ({ title: route.params.name })}
                />
                <AppStack.Screen
                    name="SettingsProductList"
                    component={SettingsProductList}
                    // @ts-ignore
                    options={({ route }) => ({ title: route.params.name })}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}