import React from 'react'
import { Container, FormButton, Form, Icon, Text, FormContent, FormH1, FormInput, FormtLabel, FormWrap } from './SigninElements'

const Signin = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">Potomac Robotics</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormtLabel htmlFor='for'>Email</FormtLabel>
                        <FormInput type='email' required />
                        <FormtLabel htmlFor='for'>Password</FormtLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
};

export default Signin