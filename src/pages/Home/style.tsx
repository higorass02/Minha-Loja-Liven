import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    containner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgb(8, 1, 42)',
        padding: 15,
        borderRadius: 15,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    }
});

export default styles