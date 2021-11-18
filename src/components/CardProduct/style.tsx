import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 2,
        marginVertical: 2,
        height: 280,
        minHeight: 280,
        minWidth: 180,
        maxWidth: 180,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#c0c0c0',
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
        marginVertical:15,
        backgroundColor: '#c0c0c0',
        padding:5,
        borderRadius:5
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
    },
    botaoBuy: {
        padding: 5,
        color: 'black',
        fontSize: 20,
        fontFamily: 'Montserrat',
    },
    iconCart:{
        marginTop:5
    }
});

export default styles