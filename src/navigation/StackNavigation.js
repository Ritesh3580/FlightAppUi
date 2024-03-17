import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { DestinationDetail, Home, Onboarding } from '../screens';
import { COLORS, SIZES, icons } from '../constants';
import Tabs from './tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
 
        <Stack.Navigator
        initialRouteName={'Onboarding'}
    >
        {/* Screens */}
        <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
                title: null,
                headerStyle: {
                    backgroundColor: COLORS.white
                },
                headerLeft: null,
                // headerRight: () => (
                //     <TouchableOpacity
                //         style={{ marginRight: SIZES.padding }}
                //         onPress={() => console.log("Pressed")}
                //     >
                //         <Image
                //             source={icons.barMenu}
                //             resizeMode="contain"
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //             }}
                //         />
                //     </TouchableOpacity>
                // ),
            }}
        />

        <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{ headerShown: false }}
        />

        {/* Tabs */}
        < Stack.Screen
            name="Home"
            component={Tabs}
            options={{
                 headerShown: false
                // title: null,
                // headerStyle: {
                //     backgroundColor: COLORS.white
                // },
                // headerLeft: ({ onPress }) => (
                //     <TouchableOpacity
                //         style={{ marginLeft: SIZES.padding }}
                //         onPress={onPress}
                //     >
                //         <Image
                //             source={icons.back}
                //             resizeMode="contain"
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //             }}
                //         />
                //     </TouchableOpacity>
                // ),
                // headerRight: () => (
                //     <TouchableOpacity
                //         style={{ marginRight: SIZES.padding }}
                //         onPress={() => console.log("Menu")}
                //     >
                //         <Image
                //             source={icons.menu}
                //             resizeMode="contain"
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //             }}
                //         />
                //     </TouchableOpacity>
                // ),
            }}
        />

     

    </Stack.Navigator>
       
    )
}

export default StackNavigation;