import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
`;

const Section = styled.div`
  font-size: 18px;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  margin: 15px 5px 5px 5px;
  border-bottom: 1px solid gray;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Label = styled.div`
  display: flex;
  width: fit-content;
`;

const OrderSummary = (props) => {
  return (
    <Container>
      <Section>Order Summary</Section>
      <Section>
        <Row>
          <Label>SubTotal:</Label>
          <Label>€ {props.total}</Label>
        </Row>
      </Section>
      <Section>
        <Row>
          <Label>VAT</Label>
          <Label>+ € {(props.total * 0.19).toFixed(2)}</Label>
        </Row>
      </Section>
      <Section>
        <Row>
          <Label>TOTAL</Label>
          <Label>€ {(props.total * 1.19).toFixed(2)}</Label>
        </Row>
      </Section>
    </Container>
  );
};

export default OrderSummary;
