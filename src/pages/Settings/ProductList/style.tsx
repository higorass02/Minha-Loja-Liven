import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        borderRadius:10,
        padding:10,
    },
    botao: {
        backgroundColor:'green',
        borderRadius:10,
        padding:10
    },
    textBotao: {
        color: '#fff'
    },
    label:{
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default styles