import styled from 'styled-components'


const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 20px;
`;

const MainTitle = styled.h1`
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    padding: 30px;
`;

const MainSubTitle = styled.p`
    font-size: 22px;
    text-align: center;
    padding: 20px;
    margin-bottom: 10px;
`;

const MainText = styled.p`
    font-size: 17px;
    text-align: left;
    width: 75%;
    margin: 0 auto;
    padding: 20px;
    font-weight: 100;
`;

const UL = styled.ul`
    margin: 0 auto;
    padding: 20px;
    font-weight: 100;
    width: 70%;
`;


const Main = () => {
    return (
        <MainWrapper>
            <MainTitle>Become an ambassador.</MainTitle>
            <MainSubTitle>Be a part of the best team on the planet.</MainSubTitle>
            <MainText>Yachtdrop is a world leader in online and mobile ordering, providing customers with an easy and secure way to order and pay for drinks from our local supplier partners.</MainText>
            <MainText>Are you a brand ambassador looking to promote Yachtdrop? Yachtdrop's ambassador program offers the following advantages to dedicated partners:</MainText>
            <UL>
                <li>Competitive commission</li>
                <li>Average order value of €3,000</li>
                <li>Exclusive promotions</li>
            </UL>
            <MainText>Contact us now at info@yachtdrop.com</MainText>
        </MainWrapper>
    )
}

export default Main
