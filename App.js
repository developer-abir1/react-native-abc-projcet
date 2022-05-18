import { StyleSheet, ImageBackground, Text, View, ScrollView, SafeAreaView, Pressable, Image } from 'react-native';
import CartItem from './component/CartItem';





export default function App() {


    return (
        <SafeAreaView style={style.contaienr} >


            <CartItem
                name="Model 3S"
                tagLine="Order Online For"
                subTitleCTG="Touchlsee Delivery"
                image={require("./assets/images/ModelS.jpeg")}


            />

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