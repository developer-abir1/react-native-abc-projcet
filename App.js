import { StyleSheet, ImageBackground, Text, View, ScrollView, SafeAreaView, Pressable, Image } from 'react-native';
import CartItem from './component/CartItem';





export default function App() {

    const handlePress = () => {
        alert("hello world")
    }
    return (
        <SafeAreaView style={style.contaienr} >


            <CartItem />

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    contaienr: {
        flex: 14,
        justifyContent: 'center',
        alignItems: 'center'
    }
})