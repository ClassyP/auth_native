import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Header, Spinner} from "./Components/Common"; //dont need to specify a particular file path, will default to index file
import LoginForm from './Components/LoginForm';
import * as firebase from 'firebase';


class App extends Component{
    state = {loggedIn: false}


    componentDidMount() {
        const firebaseConfig ={
            apiKey: 'AIzaSyCPx_-1n8rbA6keApRVFQA5E_CXBBAKjqY',
            authDomain: 'auth-f2168.firebaseapp.com',
        }
        firebase.initializeApp(firebaseConfig)
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({loggedIn: null});
            }
            else {
                this.setState({loggedIn: false});
            }

        });
    }
        // refactoring renderContent to switch 
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return  <Button> Log out </Button>;
            case false: return <LoginForm/>;
            default:
            return <Spinner size="large"/>
        }

    }

    
    render(){
        return (
          <View style={styles.container}>
              <Header headerText={"Authentication"}/>
              {this.state.renderContent}
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