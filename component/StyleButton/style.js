import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const style = StyleSheet.create({

    container: {
        width: "100%",
        padding: 10
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 12,
        fontWeight: "500",
        textTransform: 'uppercase',
        color: 'white'

    }
})

export default style