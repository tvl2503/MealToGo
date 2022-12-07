import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>

    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
        <RestaurantInfoCard />  
    </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    // backgroundColor: "blue",
  },
});