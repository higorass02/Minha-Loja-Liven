import React, { Props } from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {IProduct} from "../../interfaces";

const CardProduct = (data:IProduct ) => {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: data.image,
                }}
            />
            <Text style={styles.textName}>{data.name}</Text>
            <View style={styles.priceContext}>
                <Text style={styles.textPrice}>$ </Text>
                <Text style={styles.textPrice}>{data.price}</Text>
            </View>
            <View style={styles.AddCartContext}>
                <Text style={styles.botaoBuy}> Add to </Text>
                <FontAwesomeIcon
                    style={styles.iconCart}
                    icon={ faShoppingCart }
                    size={ 25 }
                />
            </View>
        </View>
    );
}

export default CardProduct;