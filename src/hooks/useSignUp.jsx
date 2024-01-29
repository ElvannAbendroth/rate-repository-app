import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

import { Alert } from 'react-native'
import useSignIn from './useSignIn'

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()

  const createUser = async (username, password) => {
    try {
      await mutate({
        variables: {
          user: { username: username, password: password },
        },
      })

      Alert.alert('User was successfully created!')
      signIn(username, password)
    } catch (error) {
      console.error(error)
    }
  }

  return { createUser, result }
}

export default useSignUp
