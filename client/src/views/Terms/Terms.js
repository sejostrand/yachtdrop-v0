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

const Terms = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <Title>Terms of service</Title>
        <SubTitle>Please read.</SubTitle>

        <ContentContainer>
          <Heading>Overview</Heading>
          <Content>
            This website is operated by Yacht Drop Limited. Throughout the site,
            the terms “we”, “us” and “our” refer to Yacht Drop Limited. Yacht
            Drop Limited offers this website, including all information, tools
            and services available from this site to you, the user, conditioned
            upon your acceptance of all terms, conditions, policies and notices
            stated here.
          </Content>
          <Content>
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content.
          </Content>
          <Content>
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services. If these Terms of Service
            are considered an offer, acceptance is expressly limited to these
            Terms of Service.
          </Content>
          <Content>
            Any new features or tools that are added to the current store shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those changes.
          </Content>

          <Heading>1. Introduction and Our Role</Heading>
          <Content>
            1.1. Company details: Yacht Drop Limited is a company registered in
            England and Wales with registered company number 11087847, whose
            registered office is at Devoran Boatyard, Greenbank Road, Devoran,
            Truro, Cornwall, England TR3 6PQ
          </Content>
          <Content>
            1.2. VAT number: Our VAT registration number is 284 8123 84
          </Content>
          <Content>
            1.3. We provide a way for you to communicate your orders ("Orders")
            for products ("Products") to suppliers of products ("Suppliers")
            displayed on the Website. The legal contract for the supply and
            purchase of Products is between you and the supplier that you place
            your Order with and we will conclude the sale of Products on behalf
            of, and agent for, the supplier in all cases.
          </Content>

          <Heading>2. Online Website Terms</Heading>
          <Content>
            2.1. By agreeing to these Terms of Service, you represent that you
            are at least the age of majority in your state or province of
            residence, or that you are the age of majority in your state or
            province of residence and you have given us your consent to allow
            any of your minor dependents to use this site.
          </Content>
          <Content>
            2.2. By placing an Order through the Website, you warrant that: You
            are legally capable of entering into binding contracts with
            Suppliers and you are at least 18 years old.
          </Content>
          <Content>
            2.3. You acknowledge and agree that: it is an offence for any person
            under the age of 18 to buy, or attempt to buy, alcohol, or for any
            person to buy, or attempt to buy, alcohol products on behalf of any
            person who is under the age of 18 years old.
          </Content>
          <Content>
            2.4. If your Order includes any alcohol you will be asked to provide
            proof of your age on collection or delivery of your Order. If you
            are unable to provide proof that you are aged 18 or over to the
            satisfaction of your chosen Supplier, or if the Supplier reasonably
            believes that the alcohol products you have ordered have been bought
            by you on behalf of someone under the age of 18, the Suppler
            reserves the right not to complete the delivery of the alcohol
            products to you.
          </Content>
          <Content>
            2.5. You may not use our products for any illegal or unauthorised
            purpose nor may you, in the use of the Service, violate any laws in
            your jurisdiction (including but not limited to copyright laws).
          </Content>
          <Content>
            2.6. You must not transmit any worms or viruses or any code of a
            destructive nature.
          </Content>
          <Content>
            2.7. A breach or violation of any of the Terms will result in an
            immediate termination of your Services.
          </Content>

          <Heading>3. General Conditions</Heading>
          <Content>
            3.1. We reserve the right to refuse service to anyone for any reason
            at any time.
          </Content>
          <Content>
            3.2. You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks.
          </Content>
          <Content>
            3.3.You agree not to reproduce, duplicate, copy, sell, resell or
            exploit any portion of the Service, use of the Service, or access to
            the Service or any contact on the website through which the service
            is provided, without express written permission by us.
          </Content>
          <Content>
            3.4. The headings used in this agreement are included for
            convenience only and will not limit or otherwise affect these Terms.
          </Content>

          <Heading>4. How to Make an Order and How it is Processed</Heading>
          <Content>
            4.1. Once you have selected the Products you wish to order from the
            menu of your chosen Supplier and provided the other required
            information, you will be given the opportunity to submit your Order
            by clicking or selecting the "proceed", "place my order" or similar
            button. It is important that you check all the information that you
            enter and correct any errors before clicking or selecting this
            button; once you do so you will be entering into a contract with the
            Supplier and errors cannot be corrected (subject to paragraph 4.2.
            below).
          </Content>
          <Content>
            4.2. Once you have submitted your Order and your payment has been
            authorised, you will not be entitled to change or cancel your Order,
            nor will you be entitled to a refund. If you wish to change or
            cancel your Order, you may contact our Customer Care team and they
            will attempt to contact the Supplier in order to communicate your
            requests. However, there is no guarantee that we will be able to
            reach the Supplier or that the Supplier will agree to your requests
            as they may have already started processing your Order.
          </Content>
          <Content>
            4.3. Where any payment you make is not authorised, your Order will
            not be processed or communicated to the relevant Supplier.
          </Content>
          <Content>
            4.4. On receipt of your Order, we will send it to the relevant
            Supplier and will notify you by email that your Order has been
            received and is being processed. Please note that any confirmation
            page that you may see on the Website and any Order confirmation
            e-mail that you may receive each confirm that you have a contract
            for the sale of Products with a Supplier but does not necessarily
            mean that your Order will be fulfilled by the Supplier. We encourage
            all our Suppliers to accept all Orders and to communicate any
            rejection promptly, and we will notify you (generally by email) as
            soon as reasonably practicable if a Supplier rejects your Order.
            However, Suppliers have the ability to reject Orders at any time
            because they are too busy, due to weather conditions or for any
            other reason. In doing so, Suppliers will be in breach of their
            agreement with you and any payment made in respect of the order will
            be returned to you.
          </Content>
          <Content>
            4.5. Times for deliveries and collections are provided by the
            Supplier and are only estimates. Neither we nor the Supplier
            guarantee that Orders will be delivered or will be available for
            collection within the estimated times.
          </Content>

          <Heading>5. Price and Payment</Heading>
          <Content>
            5.1.Prices will be as quoted on the Website. These prices exclude
            VAT and may exclude delivery costs (if you opt for delivery instead
            of collection) and any administration charge imposed by the
            Supplier. These will be added to the total amount due where
            applicable.
          </Content>
          <Content>
            5.2. This Website contains a large number of products and it is
            possible that some of the products may include incorrect prices. If
            the correct price for an Order is higher than the price stated on
            the Website, we will normally contact you before the relevant Order
            is dispatched. In such an event, neither the relevant Supplier nor
            we is under any obligation to ensure that the Order is provided to
            you at the incorrect lower price or to compensate you in respect of
            incorrect pricing.
          </Content>
          <Content>
            5.3. Payment for Orders must be made by an accepted credit or debit
            card through the Website or bank transfer to the Supplier by you.{' '}
          </Content>
          <Content>
            5.4.If you pay by credit or debit card, you may be required to show
            the card to the Supplier at the time of delivery or collection as
            proof of identification and so that they can check that the card
            corresponds with the receipt data for the Order. Please note that
            from time to time there may be delays with the processing of card
            payments and transactions; this may result in payments taking up to
            sixty (60) days to be deducted from your bank account or charged to
            your credit or debit card.
          </Content>

          <Heading>
            6. Accuracy, Completeness and Timeliness of Information
          </Heading>
          <Content>
            6.1.We are not responsible if information made available on this
            site is not accurate, complete or current. The material on this site
            is provided for general information only and should not be relied
            upon or used as the sole basis for making decisions without
            consulting primary, more accurate, more complete or more timely
            sources of information. Any reliance on the material on this site is
            at your own risk.
          </Content>
          <Content>
            6.2. This site may contain certain historical information.
            Historical information, necessarily, is not current and is provided
            for your reference only. We reserve the right to modify the contents
            of this site at any time, but we have no obligation to update any
            information on our site. You agree that it is your responsibility to
            monitor changes to our site.
          </Content>

          <Heading>7. Customer Care</Heading>
          <Content>
            7.1. Customer care is extremely important to us. Our Customer Care
            team will therefore try to assist you where possible if you have any
            problems with your Order. You can contact our Customer Care team by
            clicking or selecting the "Need help?", "Help" or similar button or
            by calling the telephone number shown on the Website.
          </Content>
          <Content>
            7.2. If you wish to change or cancel your Order after it has been
            submitted and payment has been authorised, you may contact our
            Customer Care team as described above and they will attempt to
            contact the Supplier in order to communicate your requests. However,
            there is no guarantee that we will be able to reach the Suppler or
            that the Supplier will agree to your requests as they may have
            already started processing your Order.
          </Content>
          <Content>
            7.3. In the event that you are dissatisfied with the quality of any
            Products or the service provided by a Supplier please consider
            providing feedback in the form of ratings, comments and reviews on
            the Website (together, "Reviews") to reflect your experience. The
            Reviews are an important part of our quality control process.{' '}
          </Content>
          <Content>
            7.4. If your Order is taking longer than expected or you have any
            other problems with your Order, you can contact our Customer Care
            Team as described above and one of our Customer Care Advisers will
            attempt to contact the Supplier in order to follow up on your query.
          </Content>
          <Content>
            7.5. If you are dissatisfied with the quality of any Products or the
            service provided by a Supplier and wish to seek a refund, a
            proportionate price reduction or any other compensation, you should
            contact the Supplier directly to lodge your complaint and, where
            appropriate, follow the Supplier's own complaint procedures. If you
            are unable to contact the Supplier, or the Supplier refuses to deal
            with your complaint, you can contact our Customer Care Team as
            described above within 48 hours of placing your Order and one of our
            Customer Care Advisers will attempt to contact the Supplier in order
            to request compensation on your behalf. Please note, however, that
            the legal contract for the supply and purchase of Products is
            between you and the Supplier that you place your Order with. We have
            no control over the Supplier and the quality of the Products or
            service that they provide, and we are not able to provide, and have
            no responsibility or liability for providing, any compensation to
            you on behalf of any Supplier.
          </Content>
        </ContentContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default Terms;
