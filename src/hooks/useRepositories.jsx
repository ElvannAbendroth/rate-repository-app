import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()

  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })

  const fetchRepositories = async () => {
    setRepositories(data?.repositories)
  }

  useEffect(() => {
    fetchRepositories()
  }, [data])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
