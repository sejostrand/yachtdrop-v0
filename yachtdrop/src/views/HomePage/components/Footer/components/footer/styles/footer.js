import styled from 'styled-components';

export const Container = styled.div`
    padding: 80px 60px;
  //background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
  //background-color: #DADED4;
  //background-color: #FDF8F5;
  //background-color: #2d545e;
  //background-color: #31708E;
    background-color: #f8694b;
    //background: linear-gradient(to right top, #f8694b, #ffcc66);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  @media (max-width: 1000px) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #F3F3F3;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #f3f3f3;
  margin-bottom: 40px;
  font-weight: bold;
`;

/* export const Logo = styled.img`
    width: 15%;
    position: absolute;
    left: 10px;
    top: 2380px;

    @media (max-width: 1000px) {
        //margin-left: 140px;
        width: 40%;
        position: static;
        margin: 0 auto;
        margin-top: -5%;
        margin-bottom: 10%;
    }
`; */