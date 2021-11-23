import React,{ useState, Fragment, useEffect, useMemo, useCallback } from 'react'
import { View,Text } from 'react-native'

/* Meus Components */
import Home from './pages/Home/index'
import Index from "./components/TopBar"
import ModalAddCart from "./components/ModalAddCart"


// import style from './index_style'
// import ListarItens from "./components/ListarItens/ListarItens";
// import styles from "./index_style";
// import {IProduct} from "./interfaces";

const Index = () => {

    return(
        <View>
            <Index/>
            <Home/>
        </View>
    )
}
export default Index