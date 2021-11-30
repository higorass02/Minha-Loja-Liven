import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';

import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart,faHome,faCogs,faStore,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function TopBar(){
    const navigation = useNavigation();
    const route = useRoute();
    let iconLoad = faHome;

    if(route.name == 'Home')
        // @ts-ignore
        iconLoad = faHome;
    else if(route.name == 'Products')
        // @ts-ignore
        iconLoad = faShoppingCart;
    else if(route.name == 'Cart')
        // @ts-ignore
        iconLoad = faStore
    else
        // @ts-ignore
        iconLoad = faHome

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={
                    (route.name == 'Home')
                        // @ts-ignore
                        ? () => navigation.navigate('SettingsProductList', { name: 'SettingsProductList' })
                        : () => navigation.goBack()
                }
            >
                {
                    (route.name == 'Home')
                        ?
                        <FontAwesomeIcon
                            style={styles.icon}
                            icon={ faCogs }
                        />
                        :
                        <FontAwesomeIcon
                            style={styles.icon}
                            icon={ faArrowLeft }
                        />
                }
            </TouchableOpacity>

            <TouchableOpacity
                // @ts-ignore
                onPress={()=>{
                    (route.name == 'Home')
                        // @ts-ignore
                        ? navigation.navigate('Home', { name: 'Custom profile header' })
                        : null
                }}
                // @ts-ignore
                style={styles.text}
            >
                {
                    (route.name == 'Home')
                    ?
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75',
                            }}
                        />
                    :
                        <Text style={{color:'#fff'}}>{route.name}</Text>
                }
            </TouchableOpacity>
            {
                (route.name != 'Home')
                ?
                    <TouchableOpacity
                        onPress={() => {
                            if (route.name == 'Products')
                                // @ts-ignore
                                navigation.navigate('Cart', {name: 'Cart'})
                            else if(route.name == 'Cart')
                                // @ts-ignore
                                navigation.navigate('Products', {name: 'Products'})
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
                : <Text/>
            }
        </View>
    );
}

//export default Index;