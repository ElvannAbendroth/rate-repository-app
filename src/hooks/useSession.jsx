import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useSession = () => {
  const { data } = useQuery(ME)
  const isAuthenticated = data?.me?.id ? true : false

  return { isAuthenticated }
}

export default useSession
