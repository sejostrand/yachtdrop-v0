import styled from 'styled-components';
import { COLORS, FONTS } from '../../assets/theme/theme';

export const CartMenuWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 110px;
  display: flex;
  z-index: 8;
  background-color: ${COLORS.color4};
  border: 3px solid ${COLORS.color2};
  border-radius: 5px;
  width: 50vw;
  height: 70vh;
  box-shadow: 0px 0px 5px;
  padding: 0px;
`;

export const CartMenuTitle = styled.div`
  height: 2rem;
  width: 100%;
  font-size: 20px;
  color: ${COLORS.color5};
  background-color: ${COLORS.color2};
  display: inline-block;
`;

export const CartItemList = styled.div`
  width: 100%;
  height: 1rem;
`;

export const CartItem = styled.div`
  height: 1rem;
  width: 100%;
`;
