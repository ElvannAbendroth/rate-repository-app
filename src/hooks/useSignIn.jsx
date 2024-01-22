import { useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH)

  const signIn = async (username, password) => {
    try {
      await mutate({
        variables: {
          username: username,
          password: password,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return [signIn, result]
}

export default useSignIn
