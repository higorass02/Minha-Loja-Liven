import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'rgb(8, 1, 42)',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        color: 'rgb(255, 255, 255)',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode:'center'
    },
    icon:{
        color: 'white'
    }
});

export default styles