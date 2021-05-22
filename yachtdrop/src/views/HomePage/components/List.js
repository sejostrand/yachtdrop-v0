import React, { useState } from 'react'
import styled from 'styled-components'

const ListWrapper = styled.form`
    width: 100%;
    height: 500px;
    background-color: #fffbf0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //background: linear-gradient(to right top, #03b29a, #f8694b);
`;


const JoinTitle = styled.h1`
    font-size: 50px;
    text-align: center;
    padding: 10px;
`;

const JoinSubTitle = styled.p`
    font-size: 25px;
    padding: 20px;
    text-align: center;
`;

const JoinInput = styled.input`
    width: 40%;
    height: 10%;
    text-align: center;
`;

const List = () => {
    const [first_name, setFirst_name] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailing = {first_name, email};

        fetch('http://localhost:1337/mailing-lists', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mailing)
        }).then(() => {
            console.log('new email added');
        })
    }

    return (
        <ListWrapper onSubmit={handleSubmit}>
            <JoinTitle>Join our list.</JoinTitle>
            <JoinSubTitle>Receive updates now and again.</JoinSubTitle>
            <JoinInput 
                type='text' 
                placeholder='First Name'
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
            />
            <JoinInput 
                type='text' 
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </ListWrapper>
    )
}

export default List
