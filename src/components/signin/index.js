import React from 'react';
import {
    Container, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel, 
    FormInput, 
    FormButton,
    Text
} from './SigninElements';

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form >
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' id='email' required />
                            <FormLabel htmlFor='password'>Email</FormLabel>
                            <FormInput type='password' id='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
