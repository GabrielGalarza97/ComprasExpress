import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getProducts } from "../services/ProductService";
import { Product } from "../component/Product";

export default function ProductsList(navigation) {
    function renderProdcut({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', { productId: product.id })
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    });

    return (
        <FlatList
            style={StyleSheet.productsList}
            contentContainerStyle={styles.productListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    );
}

const styles = StyleSheet.create({
    
});