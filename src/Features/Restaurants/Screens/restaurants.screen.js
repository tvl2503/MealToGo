import React, {useContext } from "react";
import { Searchbar } from "react-native-paper";
import {  SafeAreaView, FlatList } from "react-native";
import styled from 'styled-components/native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import  Spacer  from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import Loading from "../../../components/Loading/Loading";
import { MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`

`
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {
        isLoading && <Loading color = {MD2Colors.blue300} />
      }
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer key = {item.name} position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
