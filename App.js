import { RestaurantsScreen } from "./src/Features/Restaurants/Screens/restaurants.screen";
import React from 'react';
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
};


export default App;
