import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    listaContainer: {
        padding: 0,
        flex: 1,
        height: '100%',
    },
    item: {
        alignItems: "center",
        margin: 4,
        padding: 20,
        // backgroundColor: "#dcda48",
    },
    list: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
    },
    text: {
        color: 'red'
    },
});

export default styles