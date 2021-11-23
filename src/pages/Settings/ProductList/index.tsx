import React, { Component,useState } from "react"
import {Text, TextInput, View, TouchableOpacity, Alert, Keyboard} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import styles from './style';
import TopBar from "../../../components/TopBar";

export default class Settings extends Component<any, any> {

    // @ts-ignore
    constructor(props) {
        super(props);
        this.state ={
            total: 0
        }
    }

    gravarTotal = async () => {
        try{
            await AsyncStorage.setItem("@CGK_API",this.state.total)
            Keyboard.dismiss()
            Alert.alert("Sucesso",'salvo com sucesso!')
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TopBar/>
                <TextInput
                    style={styles.input}
                    placeholder={'qtde por paginas'}
                    // @ts-ignore
                    onChangeText={ (text) => this.setState( { total: text } ) }
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={ this.gravarTotal }
                >
                    <Text style={styles.textBotao}>Gravar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}