import { useApolloClient, useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations'

import useAuthStorage from './useAuthStorage'
import { Alert } from 'react-native'
import { useNavigate } from 'react-router-native'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const [mutate, result] = useMutation(AUTH)

  const signIn = async (username, password) => {
    try {
      const { data } = await mutate({
        variables: {
          username: username,
          password: password,
        },
      })
      authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()

      Alert.alert(`Welcome, ${username}!`, 'You successfully signed in!')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return [signIn, result]
}

export default useSignIn
