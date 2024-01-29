import { FlatList, View } from 'react-native'
import useCurrentUser from '../hooks/useCurrentUser'
import ReviewItem from '../components/ReviewItem'
import theme from '../utils/theme'
import Text from '../components/ui/Text'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const MyReviewsPage = () => {
  const { reviews, currentUser } = useCurrentUser(true)
  console.log(reviews[0].repository.url)

  return (
    // <Text>hello</Text>
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem key={item.id} entry={{ ...item, user: { username: currentUser.username } }} showActions={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponentStyle={{ marginBottom: 1.5 * REM }}
    />
  )
}

export default MyReviewsPage
