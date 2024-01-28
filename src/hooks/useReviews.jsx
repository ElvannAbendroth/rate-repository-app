import { useState, useEffect } from 'react'
import { GET_REVIEWS_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useReviews = repositoryId => {
  const [reviews, setReviews] = useState()

  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useQuery(GET_REVIEWS_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId: repositoryId,
    },
  })

  const fetchReviews = async () => {
    setReviews(data?.repository.reviews.edges)
  }

  useEffect(() => {
    fetchReviews()
  }, [data])

  return { reviews, loading, refetch: fetchReviews }
}

export default useReviews
