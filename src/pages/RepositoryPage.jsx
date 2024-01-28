import { FlatList, View } from 'react-native'
import Text from '../components/ui/Text'
import { useLocation } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from '../components/RepositoryItem'
import useReviews from '../hooks/useReviews'
import theme from '../utils/theme'
import ReviewItem from '../components/ReviewItem'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const RepositoryPage = () => {
  const location = useLocation()
  // eslint-disable-next-line no-undef
  const searchParams = new URLSearchParams(location.search)
  const userId = searchParams.get('userId')
  const repository = useRepository(userId)
  const reviews = useReviews(userId)
  //console.log(reviews.reviews)

  if (repository.repository === undefined) return <Text>...loading repos</Text>
  if (reviews.reviews === undefined) return <Text>...loading reviews</Text>
  //console.log(reviews.reviews)

  const reviewItems = reviews.reviews

  return (
    <FlatList
      data={reviewItems}
      renderItem={({ item }) => <ReviewItem key={item.node.id} entry={item.node} />}
      ListHeaderComponent={() => <RepositoryItem entry={repository.repository} isSinglePage={true} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponentStyle={{ marginBottom: 1.5 * REM }}
    />
  )
}

export default RepositoryPage
