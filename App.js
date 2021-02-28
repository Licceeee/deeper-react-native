import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ApolloProvider } from '@apollo/client'
import { client } from './Api';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'

import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './components/screens/HomeScreen'
import CardScreen from './components/screens/CardScreen'
import CategoryScreen from './components/screens/CategoryScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#151B29',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.08,
                shadowRadius: 3,

              },
              headerTintColor: "#FFF",
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
              },
              
            }}
        >
          <Stack.Screen name="Home"
                        component={HomeScreen} 
                        options={{
                          title: 'DEEPER',
                        }}
          />
          <Stack.Screen name="Card"
                        component={CardScreen} 
                        options={{
                          title: 'Question',
                        }}
          />
           <Stack.Screen name="Category"
                        component={CategoryScreen} 
                        options={{
                          title: 'Category',
                        }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ApolloProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
