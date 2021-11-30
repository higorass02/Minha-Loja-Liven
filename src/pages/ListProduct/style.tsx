import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerList: {
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal:10,
        // maxHeight: '100%',
        marginBottom:0,
        maxHeight:'80%'
    },
    containerPag: {
        flex:1,
        maxHeight:'14.5%',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    itemPaginate:{
        backgroundColor: '#c0c0c0',
        textAlign:"center",
        fontSize:15,
        padding:15,
        borderRadius:10,
        borderColor: 'black',
        marginHorizontal:2,
        borderWidth:2
    },
    itemPaginateNow:{
        backgroundColor: 'rgb(8, 1, 42)',
        color:'#fff',
        textAlign:"center",
        fontSize:15,
        padding:15,
        borderRadius:10,
        borderColor: 'red',
        marginHorizontal:2,
        borderWidth:2
    },
    // buttonContext: {
    //     display: "flex",
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     marginHorizontal: 10
    // },
    buttonContext: {
        backgroundColor:'#c0c0c0',
        padding: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 10
    },
    buttonContext2: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        backgroundColor: "rgb(8, 1, 42)",
        borderRadius: 10,
        padding: 12,
        elevation: 2,
        marginTop: 5,
        marginHorizontal: 8
    },
    buttonClose: {
        backgroundColor: "rgb(8, 1, 42)",
    },
    textStyle: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyle2: {
        marginTop: 15,
        color: "rgb(8, 1, 42)",
        textAlign: "center",
        fontSize:20,
        fontWeight: "bold",
    },
    textStyle3: {
        fontSize:20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles