import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./Common";
import firebase from 'firebase';
// are login form is responsible for figuring what our text input state is

class LoginForm extends Component{
    state = {
        email: '',
        password: ''
    }
    onButtonPress(){
        const { email, password} =this.state;
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
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
