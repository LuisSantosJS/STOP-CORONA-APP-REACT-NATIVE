import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../pages/Auth';
import AuthCreate from '../pages/AuthCreateAccount';

const AppStack = createStackNavigator();

const AuthRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent barStyle="light-content" backgroundColor='#3A0CA3' />
            <AppStack.Navigator
                headerMode='none'>
                <AppStack.Screen
                    component={Auth}
                    name='Auth'
                />
                <AppStack.Screen
                    component={AuthCreate}
                    name='AuthCreate'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default AuthRouter;