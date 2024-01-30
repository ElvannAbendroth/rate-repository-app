import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const [searchKeyword, setSearchKeyword] = useState('')

  const itemsPerPage = 5

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeyword,
      first: itemsPerPage,
      after: undefined,
    },
  })

  const fetchRepositories = async () => {
    setRepositories(data?.repositories)
    //console.log(data.repositories.pageInfo)
    const { endCursor, startCursor, hasNextPage } = data.repositories.pageInfo
    console.log('START:' + startCursor, 'END:' + endCursor, 'hasNextPage:' + hasNextPage)
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
