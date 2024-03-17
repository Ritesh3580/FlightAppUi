import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import StackNavigation from "./src/navigation/StackNavigation";




const App = () => {
    return (
        <NavigationContainer >
           <StackNavigation/>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
