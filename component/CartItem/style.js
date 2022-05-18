import { StyleSheet } from "react-native";




const style = StyleSheet.create({
    contaienr: {
        flex: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carContainer: {
        width: "100%",
        height: "100%",

    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40
    },
    subTitle: {
        fontSize: 16,
        color: "gray"
    },
    imgae: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    }

})

export default style 