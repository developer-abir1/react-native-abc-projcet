import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import style from './style'

const CartItem = () => {
    return (
        <View style={style.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')}
                style={style.imgae}

            />
            <View style={style.titles}>
                <Text style={style.title}>Model S</Text>
                <Text style={style.subTitle}>Starting at $416544</Text>

            </View>

            <StyleButton
                type="primary"
                content="Castom Order"
                onPress={() => {
                    console.warn("Hello How are you")
                }}
            />
            <StyleButton
                type="sceoundry"
                content="Invoice Inventory"
                onPress={() => {
                    console.warn("There are a new commrers")
                }}
            />

        </View>
    );
};

export default CartItem;