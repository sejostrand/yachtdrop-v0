import styled from 'styled-components'

import YourLocation from './YourLocation'
import List from './List'
import HowItWorks from './HowItWorks/index'
import { HowItWorksData } from './HowItWorks/data'


const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    background-color: #f8faf7;

    @media (max-width: 1000px) {
        height: 110px;
    }
`;


const HomePageMain = () => {
    return (
        <>
        <MainWrapper>
            <YourLocation title="Order drinks to your yacht."/>
        </MainWrapper>
        <HowItWorks heading='How it works.' data={HowItWorksData} />
        <List />
        </>
    )
}

export default HomePageMain