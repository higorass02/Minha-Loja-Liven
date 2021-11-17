import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import styles from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://liven.tech/_next/image?url=%2Fimages%2Flogo-2x.png&w=256&q=75',
                    }}
                />
                <Text style={styles.text}></Text>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.text}
                >
                    <FontAwesomeIcon
                        style={styles.icon}
                        icon={ faBars }
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default TopBar;