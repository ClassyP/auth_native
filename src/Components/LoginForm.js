import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, CardSection, Card} from "./Common";



class LoginForm extends Component{
    render() {
        return (
            <Card>
                {/*Section 1*/}
                <CardSection />
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
