import React, {useEffect, useState} from "react"
import {Text, TextInput, View, TouchableOpacity} from "react-native";
import TopBar from "../../../components/TopBar";
import styles from './style';
import {setPagProduct} from "../../../hooks";

const Index = () => {
    const [ maxPagTemp, setMaxPagTemp ] = useState()
    // @ts-ignore
    const { setMaxPruductForPag,getMaxPag } = setPagProduct()

    useEffect(() => {
        getMaxPag().then()
    }, [])

    return (
        <View>
            <TopBar/>
            <View style={styles.container}>
                <Text style={styles.label}>Number of items per page</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'10'}
                    // @ts-ignore
                    onChangeText={ (text) => setMaxPagTemp( text ) }
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={ () => setMaxPruductForPag(maxPagTemp) }
                >
                    <Text style={styles.textBotao}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Index