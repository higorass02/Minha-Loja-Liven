import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

/* My Components */
import styles from "./style";
import {useNavigation} from "@react-navigation/native";
import TopBar from "../../components/TopBar";

export default () => {
    const navigation = useNavigation();
    return(
        <View style={styles.mainContainer}>
            <TopBar/>
            <View style={styles.containner}>
                <TouchableOpacity
                    // @ts-ignore
                    onPress={ () => navigation.navigate('ListProduct', { name: 'Config List' }) }
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Show Products</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}