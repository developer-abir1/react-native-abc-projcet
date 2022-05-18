import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import style from './style'

const CartItem = (props) => {
    const { name, tagLine, image, subTitleCTG } = props;
    return (
        <View style={style.carContainer}>
            <ImageBackground source={image}
                style={style.imgae}

            />
            <View style={style.titles}>
                <Text style={style.title}>{name}</Text>
                <Text style={style.subTitle}>{tagLine}
                    {" "}
                    <Text style={style.subTitleCTG}>
                        {subTitleCTG}
                    </Text>
                </Text>

            </View>

            <View style={style.buttonContainer}>
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

        </View>
    );
};

export default CartItem;