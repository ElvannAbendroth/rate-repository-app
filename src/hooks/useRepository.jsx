import { useState, useEffect } from 'react'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepository = repositoryId => {
  const [repository, setRepository] = useState()

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId: repositoryId,
    },
  })

  const fetchRepository = async () => {
    setRepository(data?.repository)
  }

  useEffect(() => {
    fetchRepository()
  }, [data])

  return { repository, loading, refetch: fetchRepository }
}

export default useRepository
