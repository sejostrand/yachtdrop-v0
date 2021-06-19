import styled from 'styled-components';
import { COLORS, FONTS } from '@assets/theme/theme';

export const FavStar = styled.img`
  display: absolute;
  float: right;
  width: 30px;
  height: 30px;
  visibility: hidden;
  cursor: pointer;
`;

export const TileWrapper = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: ${COLORS.white};
  display: block;
  width: 160px;
  border-radius: 4px;
  height: min-content;

  &:hover ${FavStar} {
    visibility: visible;
  }

  @media (max-width: 960px) {
    transform: scale(0.8);
    margin: 0;
  }
`;

export const PackSize = styled.div`
  float: left;
  position: absolute;
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  border-radius: 4px;
  padding: 3px;
  font-size: 10px;
  font-weight: bold;
  font-family: ${FONTS.primaryFont};
  letter-spacing: 1px;

  /* if pack =1 then visibility: hidden */
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

export const DetailsWrapper = styled.div`
  padding: 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;
`;

export const ProductDisplay = styled.div`
  font-size: 15px;
  width: 100%;
  flex-flow: row wrap;
  height: 1rem;
  overflow: hidden;
  margin: 1px;
`;

export const ProductSubDisplay = styled.div`
  font-size: 14px;
  color: gray;
  width: 100%;
  height: 1rem;
  margin: 1px;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  width: 100%;
  height: 1rem;
  margin: 1px;
`;

export const AddButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 28px;
`;

export const SaveContainer = styled.div`
  display: flex;
  background-color: ${(props) => (props.isFav ? 'none' : COLORS.orange)};
  width: 40px;
  margin-right: 1px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  overflow: hidden;
`;

export const StarContainer = styled.div`
  font-size: 28px;
  color: ${(props) => (props.isFav ? COLORS.orange : 'white')};
  transform: translate(3.5px, -6px);
`;

export const AddContainer = styled.div`
  background-color: ${COLORS.orange};
  font-family: ${FONTS.secondaryFont};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  height: auto;
  text-align: center;
  transition: all 100ms ease-in-out;

  &:active {
    opacity: 0.8;
  }
`;

export const AddButtonWrapper = styled.div`
  background-color: ${COLORS.orange};
  color: white;
  font-family: ${FONTS.secondaryFont};
  font-size: 20px;
  letter-spacing: 4px;
  cursor: pointer;

  padding: 3px 0px;
  text-align: center;

  border-radius: 4px;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 0.8;
  }
`;
