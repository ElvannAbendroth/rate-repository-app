import { gql } from '@apollo/client'

// export const GET_REPOSITORIES = gql`
//   query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
//     repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
//       edges {
//         node {
//           description
//           forksCount
//           fullName
//           language
//           ownerAvatarUrl
//           ratingAverage
//           reviewCount
//           stargazersCount
//           id
//           url
//         }
//       }
//     }
//   }
// `

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $first: Int
    $after: String
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after) {
      edges {
        node {
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
          id
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              url
              fullName
              id
            }
          }
        }
      }
    }
  }
`

export const GET_REPOSITORY_BY_ID = gql`
  query getRepositoryById($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      url
      description
      forksCount
      fullName
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
    }
  }
`

export const GET_REVIEWS_BY_ID = gql`
  query getReviewsById($repositoryId: ID!, $first: Int!, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
`
