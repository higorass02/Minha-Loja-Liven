import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal:10,
        maxHeight: '91%',
    },
    btnClear:{
        backgroundColor: '#c0c0c0',
        marginTop: StatusBar.currentHeight || 0,
        width: '25%',
        alignItems:'center',
        borderRadius:10,
        padding:10

    },
    btnBack:{
        width:'50%',
        backgroundColor: '#c0c0c0',
        marginTop: StatusBar.currentHeight || 0,
        alignItems:'center',
        borderRadius:10,
        padding:10
    },
    emptyList:{
        flex:1,
        alignItems: 'center'
    },
    containerTotVal:{
        backgroundColor: 'rgb(8, 1, 42)',
        textAlign: 'center',
        alignItems: 'center',
        paddingBottom: 2
    },
    textTotVal: {
        color: '#fff',
        fontSize:20,
        paddingBottom: 2,
    },
    buttonContext: {
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
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonContext2: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 10
    },
    centeredView2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    modalView2: {
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
    button2: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen2: {
        backgroundColor: "#F194FF",
    },
    buttonClose2: {
        backgroundColor: "#2196F3",
    },
    textStyle2: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText2: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles