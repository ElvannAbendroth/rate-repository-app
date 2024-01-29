import { gql } from '@apollo/client'

export const AUTH = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
export const CREATE_REVIEW = gql`
  mutation createReview($rating: Int!, $repositoryName: String!, $ownerName: String!, $text: String!) {
    createReview(review: { rating: $rating, repositoryName: $repositoryName, ownerName: $ownerName, text: $text }) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`
