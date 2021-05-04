import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8faf7;
`;

const SignUpInput = styled.input`
    width: 40%;
    height: 10%;
    text-align: center;
    margin: 20px;
`;

const SubmitButton = styled.button`
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    font-size: 18px;
`;


const SignIn = () => {
    const [user_email, setUser_email] = useState('');
    const [user_password, setUser_password] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const mailing = {user_email, user_password};

        const fetchProducts = async () => {
            const res = await fetch('http://localhost:1337/users');
            const data = await res.json();
        
            return data;
            console.log(data)
          };
    }


    return (
        <SignUpWrapper action={"/signup"} method={"POST"} onSubmit={handleSubmit}>
            <h1>Email</h1>
            <SignUpInput 
                type='email' 
                placeholder='Email'
                value={user_email}
                onChange={(e) => setUser_email(e.target.value)}
            />
            <h1>Password</h1>
            <SignUpInput 
                type='password' 
                placeholder='Password'
                value={user_password}
                onChange={(e) => setUser_password(e.target.value)}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
        </SignUpWrapper>
    )
}

export default SignIn
