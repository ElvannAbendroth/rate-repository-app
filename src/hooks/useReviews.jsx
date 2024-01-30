import { useState, useEffect } from 'react'
import { GET_REVIEWS_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useReviews = repositoryId => {
  const [reviews, setReviews] = useState()

  const variables = {
    repositoryId: repositoryId,
    first: 6,
  }

  const { data, loading, fetchMore } = useQuery(GET_REVIEWS_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

    console.log(canFetchMore)
    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...variables,
        after: data?.repository.reviews.pageInfo.endCursor,
      },
    })
  }

  const fetchReviews = async () => {
    setReviews(data?.repository.reviews.edges)
  }

  useEffect(() => {
    fetchReviews()
  }, [data])

  return { reviews, loading, refetch: fetchReviews, fetchMore: handleFetchMore }
}

export default useReviews
