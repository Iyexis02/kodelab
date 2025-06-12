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

const GET_PRODUCTS = gql`
  query GetAllProducts {
    allProducts {
      id
      name
      client
      category
      description
      image {
        url
        alt
      }
      dateCompleted
      duration
      teamSize
      features
      technologies
      results
      gradient
      icon
      productionUrl
      caseStudyUrl
      featured
      projectStatus
      order
    }
  }
`;

const GET_TESTIMONIALS = gql`
  query GetAllTestimonials {
    allTestimonials {
      id
      name
      company
      role
      content
      rating
      avatar {
        url
        alt
      }
      project
    }
  }
`;

export { GET_EMPLOYEES, GET_PRODUCTS, GET_TESTIMONIALS };
