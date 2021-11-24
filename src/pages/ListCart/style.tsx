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
    }
});

export default styles