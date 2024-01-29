import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
  query getReviewsById($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
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
        }
      }
    }
  }
`
