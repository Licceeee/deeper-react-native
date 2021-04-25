import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';

import { client } from './app/Api';
import HomeScreen from './app/screens/HomeScreen'
import CardScreen from './app/screens/CardScreen'
import CategoryScreen from './app/screens/CategoryScreen'
import colors from "./app/config/colors";

const Stack = createStackNavigator();

export default function App() {


  const [category, setCategory] = useState();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.background,
                shadowColor: colors.black,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.08,
                shadowRadius: 3,

              },
              headerTintColor: colors.white,
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

          <Stack.Screen name="CategoryScreen"  options={{title: 'Category',}}>
              {props => <CategoryScreen {...props} setCategory={setCategory}/>}
          </Stack.Screen>
          <Stack.Screen name="CardScreen" options={{title: 'Question',}}>
              {props => <CardScreen {...props} category={category}/>}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ApolloProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
