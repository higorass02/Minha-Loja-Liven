import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';

import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart,faHome,faCogs,faStore } from '@fortawesome/free-solid-svg-icons'

export default function TopBar(){
    const navigation = useNavigation();
    const route = useRoute();
    let iconLoad = faHome;

    if(route.name == 'Home')
        // @ts-ignore
        iconLoad = faHome;
    else if(route.name == 'ListProduct')
        // @ts-ignore
        iconLoad = faShoppingCart;
    else if(route.name == 'ListCart')
        // @ts-ignore
        iconLoad = faStore
    else
        // @ts-ignore
        iconLoad = faHome

    return (
        <View style={styles.container}>
            <TouchableOpacity
                // @ts-ignore
                onPress={ () => navigation.navigate('SettingsProductList', { name: 'SettingsProductList' }) }
            >
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={ faCogs }
                />
            </TouchableOpacity>

            <TouchableOpacity
                // @ts-ignore
                onPress={()=>{ navigation.navigate('Home', { name: 'Custom profile header' }) }}
                // @ts-ignore
                style={styles.text}
            >
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75',
                    }}
                />
            </TouchableOpacity>



            <TouchableOpacity
                onPress={() => {
                    if (route.name == 'ListProduct')
                        // @ts-ignore
                        navigation.navigate('ListCart', {name: 'ListCart'})
                    else if(route.name == 'ListCart')
                        // @ts-ignore
                        navigation.navigate('ListProduct', {name: 'ListProduct'})
                    else
                        // @ts-ignore
                        navigation.navigate('Home', {name: 'Home'})
                    }
                }
            >
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={ (iconLoad)?iconLoad:faHome }
                />
            </TouchableOpacity>
        </View>
    );
}

//export default Index;