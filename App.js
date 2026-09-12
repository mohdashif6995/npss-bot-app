import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Screens
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import HorticultureScreen from './src/screens/HorticultureScreen';
import AboutScreen from './src/screens/AboutScreen';
import CropDetailScreen from './src/screens/CropDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b5e20',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '🌾 NPSS Dr.Ashif',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CropDetail"
        component={CropDetailScreen}
        options={{
          title: 'फसल विवरण',
          headerStyle: {
            backgroundColor: '#1b5e20',
          },
        }}
      />
    </Stack.Navigator>
  );
}

// Chat Stack Navigator
function ChatStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b5e20',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: '💬 NPSS Chat',
        }}
      />
    </Stack.Navigator>
  );
}

// Horticulture Stack Navigator
function HorticultureStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b5e20',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="HorticultureScreen"
        component={HorticultureScreen}
        options={{
          title: '🌻 बागवानी',
        }}
      />
    </Stack.Navigator>
  );
}

// About Stack Navigator
function AboutStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b5e20',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: 'ℹ️ About',
        }}
      />
    </Stack.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let IconComponent = Ionicons;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Horticulture') {
              IconComponent = MaterialCommunityIcons;
              iconName = focused ? 'flower' : 'flower-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1b5e20',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#f4f7f2',
            borderTopColor: '#2e7d32',
            borderTopWidth: 1,
            paddingBottom: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStackNavigator}
          options={{
            title: 'Chat',
          }}
        />
        <Tab.Screen
          name="Horticulture"
          component={HorticultureStackNavigator}
          options={{
            title: 'Horticulture',
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackNavigator}
          options={{
            title: 'About',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
