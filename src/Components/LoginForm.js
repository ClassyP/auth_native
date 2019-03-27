import React, {Component} from 'react';
import {Button, CardSection, Card, Field} from "./Common";

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
                    {/* <Field
                        value={this.state.text}
                        //anytime the user types inside this field
                        onChangeText={text =>this.setState({text})} //We want to envoke this fat arrow function
                        //passing in onChange prop down to the Field Component
                    /> */}
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
