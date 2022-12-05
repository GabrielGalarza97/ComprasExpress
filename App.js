import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, CreateNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./src/screens/ProductsList";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    Container: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});