import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from "./style";

const StyleButton = (props) => {

    const { type, content, onPress } = props;
    const bgColor = type === "primary" ? "black" : "white";
    const textItem = type === "primary" ? "white" : "black";

    return (
        <View style={style.container}>
            <Pressable
                style={[style.button, { backgroundColor: bgColor, }]}
                onPress={onPress}

            >

                <Text style={[style.buttonText, { color: textItem }]}>{content}</Text>

            </Pressable>
        </View >
    );
};

export default StyleButton;