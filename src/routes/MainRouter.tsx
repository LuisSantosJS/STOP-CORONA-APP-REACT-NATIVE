import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cases from '../pages/Cases';
import CasesMap from '../pages/CasesMap';
import Recommendations from '../pages/Recommendations';
import Contacts from '../pages/Contacts';
import Queries from '../pages/Queries';
import QueriesMap from '../pages/QueriesMap';

const AppStack = createStackNavigator();

const MainRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent barStyle="light-content" backgroundColor='#454ADE' />
            <AppStack.Navigator
                headerMode='none'>
                <AppStack.Screen
                    component={Home}
                    name='Home'
                />
                <AppStack.Screen
                    component={Profile}
                    name='Profile'
                />
                <AppStack.Screen
                    component={Cases}
                    name='Cases'
                />
                <AppStack.Screen
                    component={CasesMap}
                    name='CasesMap'
                />
                <AppStack.Screen
                    component={Recommendations}
                    name='Recommendations'
                />
                <AppStack.Screen
                    component={Contacts}
                    name='Contacts'
                />
                <AppStack.Screen
                    component={Queries}
                    name='Queries'
                />
                <AppStack.Screen
                    component={QueriesMap}
                    name='QueriesMap'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default MainRouter;