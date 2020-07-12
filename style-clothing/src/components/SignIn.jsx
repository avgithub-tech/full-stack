import React from 'react'
import '../css/signin.scss'
import FormInput from './FormInput'
import CutomButton from './CustomButton'
import {signInWithGoogle} from '../firebase/firebaseUtil'

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name] : value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with yoour email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='Email' value={this.state.email} 
                            handleChange={this.handleChange} required/>
                    
                    
                    <FormInput type='password' name='password' label='Password' value={this.state.password} 
                        handleChange={this.handleChange} required/>
                    

                    <div className='buttons'>
                        <CutomButton type='submit'>Sign In</CutomButton>
                        <CutomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign In With Google{' '}
                        </CutomButton>
                    </div>
                    
                </form>


            </div>
        )
    }

}

export default SignIn;