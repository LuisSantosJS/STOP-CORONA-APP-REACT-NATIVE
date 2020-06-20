import React from 'react';
import { StatusBar, View } from 'react-native'
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
import Chat from '../pages/Chat';

const AppStack = createStackNavigator();

const MainRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent barStyle="light-content" backgroundColor='transparent' />
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Home}
                    name='Home'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Profile}
                    name='Profile'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Cases}
                    name='Cases'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={CasesMap}
                    name='CasesMap'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Recommendations}
                    name='Recommendations'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Contacts}
                    name='Contacts'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={Queries}
                    name='Queries'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,

                    }}
                    component={QueriesMap}
                    name='QueriesMap'
                />
                <AppStack.Screen
                    component={Chat}
                    options={{
                        headerShown: true,
                        headerTitle: 'Mensagens',
                        headerTintColor: 'white',
                        headerBackground: ()=> <View style={{flex: 1, backgroundColor: '#454ADE'}}/>
                    }}
                    name='Chat'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default MainRouter;