//Import Libraries to make component
import React from "react";
import { Text, View } from "react-native";

// Make a component

const Header = props => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: "#e3e9f2",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        paddingTop: 40,
        shadowColor: "#b4bac4",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.10,
        elevaton: 4,
        position: "relative"
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available to the rest of the app
export default Header;
