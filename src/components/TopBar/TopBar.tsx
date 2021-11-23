import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';

import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart,faHome,faCogs } from '@fortawesome/free-solid-svg-icons'

export default function TopBar(){
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                // @ts-ignore
                onPress={() => navigation.navigate('ConfigList', { name: 'Config List' })
                }
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
                onPress={() => (route.name == 'Home')
                    // @ts-ignore
                    ? navigation.navigate('Profile', { name: 'Custom profile header' })
                    // @ts-ignore
                    : navigation.navigate('Home', { name: 'Custom profile header' })
                }
            >
                <FontAwesomeIcon
                    style={styles.icon}
                    icon={ (route.name == 'Home')? faShoppingCart : faHome }
                />
            </TouchableOpacity>
        </View>
    );
}

//export default TopBar;