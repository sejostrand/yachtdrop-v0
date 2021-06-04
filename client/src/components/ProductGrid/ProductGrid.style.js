import styled from 'styled-components';
import { COLORS, FONTS } from '../../assets/theme/theme';

export const GridWrapper = styled.div`
  width: auto;
  min-height: 70vh;
  background-color: ${COLORS.color5};
  padding: 10px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  @media (max-width: 960px) {
    padding: 0 auto;
  }
`;
