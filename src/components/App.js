import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, FlatList, Dimensions } from "react-native";
import SearchBar from "./SearchBar";
import Card from "./Card";
import data from "../data.json";

const App = () => {

  const renderItem = ({ item }) => (
    
      <Card image={item.imgURL} title={item.title} price={item.price} stok={item.inStock} />
    
  )


  return (

    <SafeAreaView style={styless.container}>

      <Text style={styless.title}>PATİKASTORE</Text>

      <SearchBar />

        <FlatList
          columnWrapperStyle={styless.main}
          numColumns={2}         
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

    </SafeAreaView>

  )
}

export default App;

const styless = StyleSheet.create({
  container: {
    width:Dimensions.get("window").width/1,
    height:Dimensions.get("window").height/1,
    flex:1
  },
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
    color: "purple"
  }
})