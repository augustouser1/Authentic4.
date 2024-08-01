import{createStackNavigator,StackNavigationProp} from '@react-navigation/stack';
import {ScreenAut} from '../screens';
import { ScreenReg } from '../screens';

type LoginStackParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList,'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation (){
    const Stack =createStackNavigator<LoginStackParamList>();
    return (
       <Stack.Navigator id='login' screenOptions={{headerShown: false}}>
         <Stack.Screen name = 'Login' component={ScreenAut} />
         <Stack.Screen name ='Register' component={ScreenReg} />
       </Stack.Navigator>
     )
}
