import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      display
      subDisplay
      fullDescription
      productImg {
        url
      }
      price
      packSize
    }
  }
`;
