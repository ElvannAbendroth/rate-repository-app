import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const [searchKeyword, setSearchKeyword] = useState('')

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeyword,
    },
  })

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
    setOrderBy,
    setOrderDirection,
    setSearchKeyword,
  }
}

export default useRepositories
