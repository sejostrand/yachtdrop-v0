import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import useMediaQuery from '@assets/utils/useMediaQuery';
import COVER from '@assets/img/cover-narrow.jpg';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: ${COLORS.white};
  background-image: url(${COVER});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: min(35vh, 35vw);
  width: 100%;
  padding: 0 5vw 80px 5vw;
  background-color: ${COLORS.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  min-height: 80vh;
  box-shadow: 0px -1px 50px ${COLORS.darkGray};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 1200px;
  margin: 0 10vw;
`;

const Title = styled.h1`
  display: flex;
  margin: 20px auto;
`;

const SubTitle = styled.h2`
  display: flex;
  margin: 20px auto;
`;

const Heading = styled.h3`
  margin-top: 20px;
`;

const Content = styled.p`
  margin: 10px 0;
`;

const PrivacyPolicy = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <Title>Privacy Policy</Title>
        <SubTitle>Please read.</SubTitle>

        <ContentContainer>
          <Heading>1. Consent</Heading>
          <Content>
            1.1. When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only.
          </Content>
          <Content>
            1.2. If we ask for your personal information for a secondary reason,
            like marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </Content>

          <Heading>2. What we do with your information</Heading>
          <Content>
            2.1. When you purchase something from our store, as part of the
            buying and selling process, we collect the personal information you
            give us such as your name, address and email address.
          </Content>
          <Content>
            2.2. When you browse our store, we also automatically receive your
            computer’s Internet protocol (IP) address in order to provide us
            with information that helps us learn about your browser and
            operating system.
          </Content>
          <Content>
            2.3. Email marketing (if applicable): With your permission, we may
            send you emails about our store, new products and other updates.
          </Content>

          <Heading>3. Consent withdrawal</Heading>
          <Content>
            3.1. If after you opt-in, you change your mind, you may withdraw
            your consent for us to contact you, for the continued collection,
            use or disclosure of your information, at anytime, by contacting us
            at info@yachtdrop.com or mailing us at: Yacht Drop Limited
          </Content>

          <Heading>4. Disclosure</Heading>
          <Content>
            4.1. We may disclose your personal information if we are required by
            law to do so or if you violate our Terms of Service.
          </Content>

          <Heading>5. Data</Heading>
          <Content>
            5.1. Your data is stored through Yacht Drop Limited’s data storage,
            databases and the general Yacht Drop Limited application. They store
            your data on a secure server behind a firewall.
          </Content>

          <Heading>6. Payment</Heading>
          <Content>
            6.1. If you choose a direct payment gateway to complete your
            purchase, then Yacht Drop Limited stores your credit card data. It
            is encrypted through the Payment Card Industry Data Security
            Standard (PCI-DSS). Your purchase transaction data is stored only as
            long as is necessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is deleted.
          </Content>
          <Content>
            6.2. All direct payment gateways adhere to the standards set by
            PCI-DSS as managed by the PCI Security Standards Council, which is a
            joint effort of brands like Visa, MasterCard, American Express and
            Discover.
          </Content>
          <Content>
            6.3. PCI-DSS requirements help ensures the secure handling of credit
            card information by our store and its service providers.
          </Content>

          <Heading>7. Third- party services</Heading>
          <Content>
            7.1. In general, the third-party providers used by us will only
            collect, use and disclose your information to the extent necessary
            to allow them to perform the services they provide to us.
          </Content>
          <Content>
            7.2. However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies in respect to the information we are required to
            provide to them for your purchase-related transactions.
          </Content>
          <Content>
            7.3. For providers, we recommend that you read their privacy
            policies so you can understand the manner that these providers will
            handle your personal information.
          </Content>
          <Content>
            7.4. In particular, remember that certain providers may be located
            in or have facilities that are located in a different jurisdiction
            than either you or us. So if you elect to proceed with a transaction
            that involves the services of a third-party service provider, then
            your information may become subject to the laws of the
            jurisdiction(s) in which that service provider or its facilities are
            located.
          </Content>
          <Content>
            7.5. As an example, if you are located in France and your
            transaction is processed by a payment gateway located in the United
            States, then your personal information used in completing that
            transaction may be subject to disclosure under United States
            legislation, including the Patriot Act.
          </Content>
          <Content>
            7.6. Once you leave our store’s website or are redirected to a
            third-party website or application, you are no longer governed by
            this Privacy Policy or our website’s Terms of Service.
          </Content>

          <Heading>8. Links</Heading>
          <Content>
            8.1. When you click on links on our store, they may direct you away
            from our site. We are not responsible for the privacy practices of
            other sites and encourage you to read their privacy statements.
          </Content>

          <Heading>9. Security</Heading>
          <Content>
            9.1. To protect your personal information, we take reasonable
            precautions and follow industry best practices to make sure it is
            not inappropriately lost, misused, accessed, disclosed, altered or
            destroyed.
          </Content>
          <Content>
            9.2. If you provide us with your credit card information, the
            information is encrypted using secure socket layer technology (SSL)
            and stored with an AES-256 encryption. Although no method of
            transmission over the Internet or electronic storage is 100% secure,
            we follow all PCI-DSS requirements and implement additional
            generally accepted industry standards.
          </Content>

          <Heading>10. Age of consent</Heading>
          <Content>
            10.1. You must be 18 years or older or at least the age of majority
            in the jurisdiction where you reside or from which you use this
            Service.
          </Content>

          <Heading>11. Changes to the privacy policy</Heading>
          <Content>
            11.1. We reserve the right to modify this privacy policy at any
            time, so please review it frequently. Changes and clarifications
            will take effect immediately upon their posting on the website. If
            we make material changes to this policy, we will notify you here
            that it has been updated, so that you are aware of what information
            we collect, how we use it, and under what circumstances, if any, we
            use and/or disclose it.
          </Content>
          <Content>
            11.2. If our store is acquired or merged with another company, your
            information may be transferred to the new owners so that we may
            continue to sell products to you.
          </Content>

          <Heading>12. Questions and contact information</Heading>
          <Content>
            12.1. If you would like to: access, correct, amend or delete any
            personal information we have about you, register a complaint, or
            simply want more information info@yachtdrop.com or by mail at Yacht
            Drop Limited.
          </Content>
        </ContentContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default PrivacyPolicy;
