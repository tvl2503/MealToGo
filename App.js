import { RestaurantsScreen } from "./src/Features/Restaurants/Screens/restaurants.screen";
import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/components/utility/safe-area.component";
import { theme } from "./src/infrastructure/theme";
import { Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Tab = createBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
  };
};
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider >
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={createScreenOptions}
            >
              <Tab.Screen  name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      
    </ThemeProvider>
  );
};


export default App;
