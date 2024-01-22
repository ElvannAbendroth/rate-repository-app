import { useApolloClient, useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations'

import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const [mutate, result] = useMutation(AUTH)

  const signIn = async (username, password) => {
    try {
      const { data } = await mutate({
        variables: {
          username: username,
          password: password,
        },
      })
      //console.log(data.authenticate.accessToken)
      authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()
    } catch (error) {
      console.error(error)
    }
  }

  return [signIn, result]
}

export default useSignIn
