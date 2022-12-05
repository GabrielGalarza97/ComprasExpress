import React from "react";
import {Text, Image, View, StyleSeet, TouchableOpacity} from "react-native";

export function Product({name, price, image, onPress}){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={image}>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
});