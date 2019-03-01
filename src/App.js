import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { Header } from "./Components/Common"; //dont need to specify a particular file path, will default to index file
import lo


class App extends Component{

    componentDidMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyCPx_-1n8rbA6keApRVFQA5E_CXBBAKjqY',
                authDomain: 'auth-f2168.firebaseapp.com',
                databaseURL: 'https://auth-f2168.firebaseio.com',
                projectId: 'auth-f2168',
                storageBucket: 'auth-f2168.appspot.com',
                messagingSenderId: "'36276306908'
            }
        );
    }


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