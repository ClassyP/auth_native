import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import { Header } from "./Components/Common"; //dont need to specify a particular file path, will default to index file
import LoginForm from './Components/LoginForm';


class App extends Component{

    componentDidMount() {
        const firebaseConfig ={
            apiKey: 'AIzaSyCPx_-1n8rbA6keApRVFQA5E_CXBBAKjqY',
            authDomain: 'auth-f2168.firebaseapp.com',
        }
        firebase.initializeApp(firebaseConfig)
    }


    render(){
        return (
          <View style={styles.container}>
              <Header headerText={"Authentication"}/>
              <LoginForm />
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