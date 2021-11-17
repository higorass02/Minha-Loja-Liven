import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        alignItems:'center',
        justifyContent:'center',
        // flexDirection: "row",
        marginHorizontal: 5,
        // paddingVertical: 5,
        height: 280,
        minHeight: 280,
        minWidth: 180,
        maxWidth: 180,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: 'rgb(8, 1, 42)',
        borderWidth: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        // borderColor: 'rgb(8, 1, 42)',
        borderWidth: 2,
    },
    textName: {
        textAlign: 'center',
        color: 'rgb(8, 1, 42)',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    priceContext: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        color: 'white',
    },
    textPrice: {
        textAlign: 'center',
        color: 'rgb(8, 1, 42)',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    AddCartContext: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    botaoBuy: {
        padding: 5,
        color: 'black',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    iconCart:{
        marginTop:5
    }
});

export default styles