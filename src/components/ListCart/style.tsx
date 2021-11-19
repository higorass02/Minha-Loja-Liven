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
        maxHeight: '91%',
    }
});

export default styles