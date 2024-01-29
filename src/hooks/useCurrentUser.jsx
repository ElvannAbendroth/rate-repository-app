import { useQuery } from '@apollo/client'
import { ME } from '../graphql/queries'

// Define the hook
const useCurrentUser = (includeReviews = false) => {
  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  })

  return {
    loading,
    error,
    currentUser: data?.me || null,
    isAuthenticated: data?.me?.id ? true : false,
    reviews: data?.me?.reviews?.edges.map(edge => edge.node) || [],
  }
}

export default useCurrentUser
