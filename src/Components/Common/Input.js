import React from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";

const Input = ({ label, value, onChangeText }) => {
    return (
     <View style={styles.containerStyle}>
         <Text style={styles.labelStyle}>{label}</Text>
         <TextInput
             style={styles.inputStyle}
             style={{height: 20, width: 100 }}
             //passing props in textInput flag (primitive version of the input)
             value={value}
             onChangeText={onChangeText}
         />
     </View>
    );

};

export {Input};

const styles = StyleSheet.create ({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
    }
});