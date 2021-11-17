import React from 'react'
import { View, Text } from 'react-native'

//Meus Components
import style from './index_style'
import TopBar from "./components/TopBar/TopBar";
import ListarItens from "./components/ListarItens/ListarItens";
import styles from "./index_style";

const Index = () => {
    return(
        <View style={styles.textContent}>
            <TopBar/>
            <ListarItens/>
        </View>
    )
}
export default Index