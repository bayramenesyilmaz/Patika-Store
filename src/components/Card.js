import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Card = (props) => {

    return (

        <SafeAreaView style={styless.container}>

            <Image
                style={styless.image}
                source={{ uri: props.image }}
            />
            <View style={styless.info}>
                <Text style={styless.title}>{props.title}</Text>
                <Text style={styless.price}>{props.price}</Text>
                
                {props.stok ? "" : <Text style={styless.stok}>STOKTA YOK</Text>}
            </View>


        </SafeAreaView>

    )
}

export default Card;

const styless = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        flex:1,
        alignSelf:"stretch"
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
        resizeMode:"contain"
    },
    info:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 8,
        color: "black",
    },
    price: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5
    },
    stok: {
        fontWeight: "bold",
        fontSize: 20,
        color: "red"

    }
})