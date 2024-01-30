import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'
import { useEffect, useState } from 'react'

// Define the hook
const useCurrentUser = (includeReviews = false) => {
  const [reviews, setReviews] = useState([])

  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  })

  const fetchReviews = async () => {
    const newReviews = data?.me?.reviews?.edges.map(edge => edge.node) || []
    setReviews(newReviews)
  }

  useEffect(() => {
    fetchReviews()
  }, [data])

  return {
    loading,
    error,
    currentUser: data?.me || null,
    isAuthenticated: data?.me?.id ? true : false,
    reviews,
    refetch: fetchReviews,
  }
}

export default useCurrentUser
