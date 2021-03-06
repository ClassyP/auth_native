import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
    </View>
    )
}

export { Card } ;

const style = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        zIndex: 3,
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }



};