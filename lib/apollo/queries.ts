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

const GET_MILESTONES = gql`
  query GetAllMilestones {
    allMilestones(orderBy: year_ASC) {
      id
      year
      title
      description
    }
  }
`;

const GET_COMPANY_VALUES = gql`
  query GetAllCompanyvalues {
    allCompanyvalues {
      id
      icon
      title
      description
    }
  }
`;

const GET_STATS = gql`
  query GetAllStats {
    allStats {
      id
      value
      label
    }
  }
`;

export { GET_EMPLOYEES, GET_PRODUCTS, GET_TESTIMONIALS, GET_MILESTONES, GET_COMPANY_VALUES, GET_STATS };
