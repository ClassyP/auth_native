import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, CardSection, Card} from "./Common";



class LoginForm extends Component{
    state = {
        text: ''
    }

    render() {
        return (
            <Card>
                {/*Section 1*/}
                <CardSection >
                    <TextInput
                        value={this.state.text}
                        onChangeText={text =>this.setState({text})}
                    />
                </CardSection>
                {/*Section 2*/}
                <CardSection />


                {/*Section 3*/}
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }

}

export default LoginForm;
