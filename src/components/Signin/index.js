import React from 'react'
import { Container,
    FormWrap, 
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormButton,
    FormInput,
    Text   
} from './SigninElements'

const SignIn = () => {
    return (
        <>
           <Container>
               <FormWrap>
                   <Icon to = "/">MOne</Icon>
                   <FormContent>
                       <Form action = '#'>
                           <FormH1>Sign in to your account</FormH1>
                           <FormLabel htmlfor = "for">Email</FormLabel>
                           <FormInput type = 'email' required />
                           <FormLabel htmlfor = "for">Password</FormLabel>
                           <FormInput type = 'password' required />
                           <FormButton type = 'submit'>Continue</FormButton>
                           <Text>Forgot Password</Text>
                       </Form>
                   </FormContent>
               </FormWrap>
           </Container> 
        </>
    )
}

export default SignIn
