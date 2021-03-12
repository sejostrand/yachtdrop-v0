import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 80vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  //background: #150f0f;
  background: white;
  //background-color: #31708E;
  color: black;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 350px;
`;

export const ProductImg = styled.img`
  //height: 200px;
  width: 160px;
  height: auto;
  min-width: 160px;
  max-width: 100%;
  //box-shadow: 8px 8px #fdc500;
  display: flex;
  margin: 0 auto;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(3rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  //font-weight: 400;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  font-weight: 420;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;