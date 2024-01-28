import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
  {
    me {
      id
      username
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
