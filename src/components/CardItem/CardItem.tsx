import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    "id": string,
    "createdAt": Date,
    "name": string,
    "price": string,
    "image": string,
    "stock": number
}

const CardItem = (props: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: props.image,
                }}
            />
            <Text style={styles.textName}>{props.name}</Text>
            <View style={styles.priceContext}>
                <Text style={styles.textPrice}>$ </Text>
                <Text style={styles.textPrice}>{props.price}</Text>
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

export default CardItem;