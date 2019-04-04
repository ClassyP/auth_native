import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./Common";

// are login form is responsible for figuring what our text input state is

class LoginForm extends Component{
    state = {
        email: ''
    }

    render() {
        return (
            <Card>
                {/*Section 1*/}
                <CardSection >
                   <Input
                       placehoder={'user@gmail.com'}
                       label={'Email: '}
                       value={this.state.email}
                       onChangeText={email=> this.setState({email})}
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
