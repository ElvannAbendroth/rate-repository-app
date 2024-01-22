import { useApolloClient } from '@apollo/client'

import useAuthStorage from './useAuthStorage'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = async () => {
    try {
      authStorage.setAccessToken('')
      apolloClient.resetStore()
    } catch (error) {
      console.error(error)
    }
  }

  return [signOut]
}

export default useSignOut
