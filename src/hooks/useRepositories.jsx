import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const [searchKeyword, setSearchKeyword] = useState('')

  const variables = { orderBy, orderDirection, searchKeyword, first: 6 }

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    })
  }

  const fetchRepositories = async () => {
    setRepositories(data?.repositories)
  }

  useEffect(() => {
    fetchRepositories()
  }, [data, orderBy, orderDirection])

  return {
    repositories,
    loading,
    refetch: fetchRepositories,
    fetchMore: handleFetchMore,
    setOrderBy,
    setOrderDirection,
    setSearchKeyword,
  }
}

export default useRepositories
