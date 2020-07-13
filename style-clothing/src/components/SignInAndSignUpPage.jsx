import React from 'react'

import '../css/signinandsignup.scss'

import SignIn from './SignIn'
import SignUp from './SignUp'


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'> 
       <SignIn/>
       <SignUp/>
    </div>
)

export default SignInAndSignUpPage;