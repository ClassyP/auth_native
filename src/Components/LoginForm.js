import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./Common";

// are login form is responsible for figuring what our text input state is

class LoginForm extends Component{
    state = {
        text: ''
    }

    render() {
        return (
            <Card>
                {/*Section 1*/}
                <CardSection >
                   <Input
                       label={'Email:'}
                       value={this.state.text}
                       onChangeText={text=> this.setState({text})}
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
