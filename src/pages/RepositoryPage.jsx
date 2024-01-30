import { FlatList, View } from 'react-native'
import { useLocation } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from '../components/RepositoryItem'
import useReviews from '../hooks/useReviews'
import theme from '../utils/theme'
import ReviewItem from '../components/ReviewItem'
import CardSkeleton from '../components/CardSkeleton'
import { useState } from 'react'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const RepositoryPage = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)
  const location = useLocation()
  // eslint-disable-next-line no-undef
  const searchParams = new URLSearchParams(location.search)
  const repositoryId = searchParams.get('repositoryId')
  const repository = useRepository(repositoryId)
  const { reviews, fetchMore } = useReviews(repositoryId)

  const onEndReach = () => {
    console.log("You've reached the end")
    fetchMore()
  }

  const handleEndReached = () => {
    if (!initialLoadComplete) {
      // Ignore end reached event during initial load
      return
    }
    onEndReach()
  }

  if (repository.repository === undefined) return <CardSkeleton />
  if (reviews === undefined) return <CardSkeleton />

  return (
    <FlatList
      style={{ flex: 0 }}
      data={reviews}
      renderItem={({ item }) => <ReviewItem key={item.node.id} entry={item.node} />}
      ListHeaderComponent={() => <RepositoryItem entry={repository.repository} isSinglePage={true} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponentStyle={{ marginBottom: 1.5 * REM }}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      onContentSizeChange={() => setInitialLoadComplete(true)} // Mark initial load complete when content size changes
    />
  )
}

export default RepositoryPage
