import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CardItensCart = (data:any ) => {
    //console.log(data)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.secondRow}>
                <Image
                    style={styles.image}
                    source={{
                        uri: data.image,
                    }}
                />
                <View style={styles.descContainer}>
                    <Text style={styles.textName}>{data.name}</Text>
                    <Text>here you can enter some description!</Text>
                    <View style={styles.rowPrice}>
                        <View style={styles.priceContext}>
                            <Text style={styles.textPrice}>$ </Text>
                            <Text style={styles.textPrice}>{data.price} (Unit.)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection:'row' }}>
                        <Text style={styles.textName}>Quantity: </Text>
                        <Text style={styles.textPrice}>{data.quantity}x{data.price} = $ {data.price*data.quantity}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardItensCart;