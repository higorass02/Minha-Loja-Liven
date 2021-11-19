import * as React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import TopBar from "./components/TopBar/TopBar";
import {useState} from "react";
import CardProduct from "./components/ListCart";

// @ts-ignore
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Custom profile header' })
                }
            />
        </View>
    );
}

// @ts-ignore
function ProfileScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TopBar/>
            <Text>Profile screen</Text>
            {/*<FlatList*/}
            {/*    data={data}*/}
            {/*    renderItem={renderItem}*/}
            {/*    keyExtractor={(item) => item.productId}*/}
            {/*    horizontal={false}*/}
            {/*    numColumns={1}*/}
            {/*/>*/}
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

// @ts-ignore

export default function Routes() {
    // @ts-ignore
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'My home' }}
                />
                <AppStack.Screen
                    name="Profile"
                    component={CardProduct}
                    // @ts-ignore
                    options={({ route }) => ({ title: route.params.name })}
                />

                <AppStack.Screen name="home" component={Home}/>
                <AppStack.Screen name="store" component={Home}/>
                {/*<AppStack.Screen name="Detail" component={Detail}/>*/}
            </AppStack.Navigator>
        </NavigationContainer>
    );
}