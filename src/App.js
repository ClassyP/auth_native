import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from "./Components/Common"; //dont need to specify a particular file path, will default to index file

class App extends Component{
    render(){
        return (
          <View style={styles.container}>
              <Header headerText={"Authentication"}/>
              <Text>
                  Auth Native
              </Text>
          </View>
        );
    }

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});