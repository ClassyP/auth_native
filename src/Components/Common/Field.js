import React from "react";
import { TextInput,Text, View } from "react-native";

// receiving (value) & (onChange) as prop from LoginForm.js
const Field = ({label, value, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                //passing props in textInput flag (primative version of the input)
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export { Field};