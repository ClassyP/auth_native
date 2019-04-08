import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, CardSection, Card, Input} from "./Common";
import firebase from 'firebase';
// are login form is responsible for figuring what our text input state is

class LoginForm extends Component{
    state = {
        email: '',
        password: '',
        error:''
    }
    onButtonPress(){
        const { email, password} =this.state;
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed.'})
                    });
            });
    }

    render() {
        return (
            <Card>
                {/*Section 1*/}
                <CardSection >
                   <Input
                   placeholder={'user@gmail.com'}
                   label={'Email: '}
                   value={this.state.email}
                   onChangeText={email=> this.setState({email})}
                   />
                </CardSection>
                {/*Section 2*/}
                <CardSection >
                    <Input
                    secureTextEntry
                    placeholder={'password'}
                    label={'Password: '}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                {/*Section 3*/}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }

}

export default LoginForm;


const styles = StyleSheet.create ({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});