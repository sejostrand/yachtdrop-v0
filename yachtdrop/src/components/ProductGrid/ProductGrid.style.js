import styled from 'styled-components';
import { COLORS, FONTS } from '../../assets/theme/theme';

export const GridWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${COLORS.color5};
  padding: 20px;
  display: flex;
  flex-flow: row wrap;

  justify-content: space-between;
`;
