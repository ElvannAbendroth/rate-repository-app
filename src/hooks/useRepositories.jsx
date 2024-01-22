import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  //const { data, error, loading } = useQuery(GET_REPOSITORIES);

  const fetchRepositories = async () => {
    setLoading(true)

    const response = await fetch(`http://192.168.101.131:5000/api/repositories`)
    const json = await response.json()

    setLoading(false)
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
