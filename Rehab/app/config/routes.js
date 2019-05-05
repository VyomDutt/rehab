import { StatusBar } from 'react-native';
import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/login';
import Register1 from '../screens/register1';
import Register2 from '../screens/register2';
import Add from '../screens/add';
import CurrencyList from '../screens/currencies';
import DoseList from '../screens/doses';
import PoisonList from '../screens/poisons';
import TimeList from '../screens/times';
import Feed from '../screens/feed';
import Stats from '../screens/stats';
import Award from '../screens/awards';

import { Ionicons } from '@expo/vector-icons';
const Register2Stack = createStackNavigator({
    Register2: {
        screen: Register2,
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    DoseList: {
        screen: DoseList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    PoisonList: {
        screen: PoisonList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    TimeList: {
        screen: TimeList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
}, {
        mode: 'modal',
        cardStyle: { },
        headerMode: 'none',
    }
);
const addStack = createStackNavigator({
    Add: {
        screen: Add,
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    DoseList: {
        screen: DoseList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    PoisonList: {
        screen: PoisonList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    TimeList: {
        screen: TimeList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
}, {
        mode: 'modal',
        cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none',
    }
);
const FeedStack = createStackNavigator({
    Feed: {
        screen: Feed,
    },

    Add: {
        screen: addStack,
    },

    PoisonList: {
        screen: PoisonList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },


}, {
        mode: 'modal',
        cardStyle: {  },
        headerMode: 'none',
    }
);

export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
        },
    },
    Register1: {
        screen: Register1,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#7b1fa2', borderBottomWidth: 0, },
        },

    },
    Register2: {
        screen: Register2Stack,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#7b1fa2', borderBottomWidth: 0, },
        },
    }
}, {
        headerMode: 'screen',
    });

export const SignedIn = createBottomTabNavigator({
    Stats: {
        screen: Stats,
        navigationOptions: {
            tabBarIcon: <Ionicons name="md-pulse" size={32} color="white" />

        }
    },
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarIcon: <Ionicons name="md-calendar" size={32} color="white" />

        }
    },
    Awards: {
        screen: Award,
        navigationOptions: {
            tabBarIcon: <Ionicons name="md-medal" size={32} color="white" />

        }
    }

},
    {
        order: ['Feed', 'Stats', 'Awards'],
        initialRouteName: 'Stats',
        tabBarOptions: {
            style: {
                backgroundColor: '#7b1fa2',
                borderTopWidth: 0,
            },

            showLabel: false,
            activeBackgroundColor: '#673AB7',
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};
