import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'

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
                <Image
                    style={{width:200,height:200}}
                    source={{
                        uri: 'https://c.tenor.com/GyLwav1F2A0AAAAM/knight-running.gif'
                    }}
               />
                <TouchableOpacity
                    // @ts-ignore
                    onPress={ () => navigation.navigate('ListProduct', { name: 'Config List' }) }
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Go to Products</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}