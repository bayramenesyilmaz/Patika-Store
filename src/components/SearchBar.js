import React from "react";
import { Dimensions, SafeAreaView ,StyleSheet,Text, TextInput} from "react-native";

const SearchBar = () =>{

    return(

        <SafeAreaView>
            <TextInput
                style={styless.input}
                placeholder="Ara"
            />
        </SafeAreaView>

    )
}

export default SearchBar;

const styless = StyleSheet.create({
    input:{
        padding:10,
        margin:10,
        marginTop:1,
        width:Dimensions.get('window').width/1.05,
        backgroundColor:"#e0e0e0",
        borderRadius:10,
        fontSize:18
    }
})