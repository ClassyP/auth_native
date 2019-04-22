import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, CardSection, Card, Input, Spinner} from "./Common";
import firebase from 'firebase';
// are login form is responsible for figuring what our text input state is

class LoginForm extends Component{
    state = {
        email: '',
        password: '',
        error:'',
        loading: false
    }
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginFail(){
        this.setState({error: 'Authenttication Failed', loading: false})
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error:'',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading){
            return <Spinner size="small"/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
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
                    {this.renderButton()}
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