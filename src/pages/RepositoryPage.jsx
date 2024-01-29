import { FlatList, View } from 'react-native'
import { useLocation } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from '../components/RepositoryItem'
import useReviews from '../hooks/useReviews'
import theme from '../utils/theme'
import ReviewItem from '../components/ReviewItem'
import CardSkeleton from '../components/CardSkeleton'

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
  const repositoryId = searchParams.get('repositoryId')
  const repository = useRepository(repositoryId)
  const reviews = useReviews(repositoryId)

  if (repository.repository === undefined) return <CardSkeleton />
  if (reviews.reviews === undefined) return <CardSkeleton />

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
