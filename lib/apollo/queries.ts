import { gql } from '@apollo/client';

const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    allEmployees {
      id
      name
      surname
      role
      introduction
      skills
      image {
        url
      }
      socials
    }
  }
`;

export { GET_EMPLOYEES };
