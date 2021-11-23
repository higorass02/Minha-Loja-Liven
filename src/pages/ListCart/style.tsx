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
    }
});

export default styles