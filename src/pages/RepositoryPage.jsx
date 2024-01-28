import { View } from 'react-native'
import Text from '../components/ui/Text'
import { useLocation } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from '../components/RepositoryItem'
//import queryString from 'query-string'

const RepositoryPage = () => {
  const location = useLocation()
  // eslint-disable-next-line no-undef
  const searchParams = new URLSearchParams(location.search)
  const userId = searchParams.get('userId')
  const repository = useRepository(userId)

  if (repository.repository === undefined) return <Text>...loading</Text>
  return (
    <View>
      <RepositoryItem entry={repository.repository} isSinglePage={true} />
    </View>
  )
}

export default RepositoryPage
