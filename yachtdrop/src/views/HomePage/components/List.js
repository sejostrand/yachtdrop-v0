import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
    width: 100%;
    height: 500px;
    background-color: #fffbf0;
    //display: flex;
    //justify-content: center;
`;

/*const JoinTitle = styled.h1`
    display: flex;
    font-size: 50px;
    padding: 40px;
    align-items: center;
    //flex-direction: column;
`;

const JoinSubTitle = styled.p`
    display: flex;
    font-size: 20px;
    padding: 20px;
    //align-items: center;
    //text-align: center;
    //flex-direction: column;
    align-self: center;
`;*/

const JoinTitle = styled.h1`
    font-size: 50px;
    padding-top: 140px;
    text-align: center;
    //flex-direction: column;
`;

const JoinSubTitle = styled.p`
    font-size: 25px;
    padding: 20px;
    //align-items: center;
    //text-align: center;
    //flex-direction: column;
    text-align: center;
`;

const JoinInput = styled.input`
    width: 40%;
    height: 10%;
    text-align: center;
    margin-left: 30%;
`;

const List = () => {
    return (
        <ListWrapper>
            <JoinTitle>Join our list.</JoinTitle>
            <JoinSubTitle>Receive updates now and again.</JoinSubTitle>
            <JoinInput type='text' placeholder='Email Address'></JoinInput>
        </ListWrapper>
    )
}

export default List
