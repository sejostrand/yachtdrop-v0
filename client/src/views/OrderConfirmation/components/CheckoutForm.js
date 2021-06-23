import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import useMediaQuery from '@assets/utils/useMediaQuery';
import COVER from '@assets/img/cover-narrow.jpg';
import axios from 'axios';
import { useCurrentUser } from '@assets/utils/CurrentUser';
import OrderSummary from '../objects/OrderSummary';
import ConfirmButton from '../objects/ConfirmButton';

const FormContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-flow: column nowrap;
  background-color: white;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
`;

const OrderForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const VesselContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${COLORS.orange};
  padding: 5px;
  margin: 2px 0;
  border-radius: 7px;
`;

const VesselLabel = styled.div`
  display: flex;
  color: white;
  font-size: 18px;
  margin: 3px;
`;

const Field = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
`;

const FieldLabel = styled.div`
  display: flex;
  width: fit-content;
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin: 5px 10px;
`;

const InputField = styled.input`
  width: 300px;
  height: 2rem;
  padding: 3px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 900px;
  margin: 30px auto 60px auto;
`;

const ReturnButton = styled.a`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${COLORS.orange};
  color: white;
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  text-decoration: none;
  margin: 25px 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Total = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 20px;
`;

const Paragrapgh = styled.p`
  margin: 10px;
`;

const Consent = styled.div`
  max-width: 250px;
  margin: 0 10px;
  font-size: 12px;
`;

const PageLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const CheckoutForm = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const mediaQuery = useMediaQuery('(min-width: 600px)');
  const user = useCurrentUser();

  const [vessel, setVessel] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  // const [value, onChange] = useState(new Date());
  const [redirect, setRedirect] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const getItems = () => {
    let result = {};
    cart.forEach((product) => (result[product.id] = product.qty));
    return result;
  };

  const POSTbody = () => {
    return {
      expectedDelivery: '2021-06-10T17:55:14.099Z',
      usersPermissionsUser: user.id,
      location: location,
      vesselName: vessel,
      productList: getItems(),
      contact: contact,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:1337/orders', POSTbody(), {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        setRedirect(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (redirect == true) {
      window.location.assign('/checkout');
    }
  }, [redirect]);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <FormContainer>
      <OrderForm action={''} method={'POST'} onSubmit={handleSubmit}>
        <VesselContainer>
          <VesselLabel>Vessel Name: </VesselLabel>
          <InputField
            type='text'
            value={vessel}
            onChange={(e) => setVessel(e.target.value)}
          ></InputField>
        </VesselContainer>
        <Field>
          <FieldLabel>Reciever Name:</FieldLabel>
          <InputField
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputField>
        </Field>
        <Field>
          <FieldLabel>Contact Number:</FieldLabel>
          <InputField
            type='text'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          ></InputField>
        </Field>
        <Field>
          <FieldLabel>Location: </FieldLabel>
          <InputField
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></InputField>
        </Field>
        <Field>
          <FieldLabel>Datetime:</FieldLabel>
          <InputField
            type='text'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          ></InputField>
          {/* <div>
                  <DateTimePicker onChange={onChange} value={value} />
                </div> */}
        </Field>
        <OrderSummary total={totalPrice} />
        <Field>
          <input
            type='checkbox'
            value={agreeTerms}
            onChange={(e) => setAgreeTerms(!agreeTerms)}
          />
          <Consent>
            I have read the website{' '}
            <PageLink
              onClick={() => window.open('http://localhost:3000/terms')}
            >
              terms and conditions
            </PageLink>{' '}
            and{' '}
            <PageLink
              onClick={() =>
                window.open('http://localhost:3000/privacy-policy')
              }
            >
              privacy policy
            </PageLink>{' '}
            and agree to the terms.
          </Consent>
        </Field>

        <ConfirmButton agreeTerms={agreeTerms} />
      </OrderForm>
    </FormContainer>
  );
};

export default CheckoutForm;
