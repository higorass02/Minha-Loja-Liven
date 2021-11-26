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
    }
});

export default styles