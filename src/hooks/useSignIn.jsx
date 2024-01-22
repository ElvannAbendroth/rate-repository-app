import { useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations'
import { useState } from 'react'

const useSignIn = () => {
  const [token, setToken] = useState('')
  const [mutate, result] = useMutation(AUTH)

  const signIn = async (username, password) => {
    try {
      const result = await mutate({
        variables: {
          username: username,
          password: password,
        },
      })
      setToken(result.data.authenticate.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  return [signIn, result, token]
}

export default useSignIn
