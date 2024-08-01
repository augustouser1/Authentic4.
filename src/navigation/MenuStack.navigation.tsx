import React from "react"
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import {ScreenAut} from  '../screens/ScreenAut';
import {ScreenReg} from '../screens/ScreenReg';
type MenuStackParam = {
     AutScreen: undefined
     Regscreen: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "AutScreen">
export type MenuStackTypes = {
   navigation: MenuScreenNavigation

}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true
      }}>
        <Stack.Screen name="AutScreen" component={ScreenAut} />
        <Stack.Screen name="Regscreen" component={ScreenReg} />
      </Stack.Navigator>
    );
}