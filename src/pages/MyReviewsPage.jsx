/* eslint-disable react/no-unescaped-entities */
import { FlatList, View } from 'react-native'
import useCurrentUser from '../hooks/useCurrentUser'
import ReviewItem from '../components/ReviewItem'
import theme from '../utils/theme'
import Text from '../components/ui/Text'
import { Button } from '@rneui/themed'
import { Pen } from 'lucide-react-native'
import { useNavigate } from 'react-router-native'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const ReviewPageHeader = ({ isEmptyList }) => {
  const navigate = useNavigate()
  return (
    <View>
      <Text variant={'subheader'}>My Reviews</Text>
      {isEmptyList && (
        <>
          <Text style={{ paddingTop: 1 * REM, color: theme.colors.muted }}>
            It's a little quiet here, start with adding a new review!
          </Text>
          <Button
            color="primary"
            style={{ paddingTop: 1 * REM }}
            onPress={() => navigate(`/create-review`)}
            icon={<Pen size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />}
          >
            Write a Review
          </Button>
        </>
      )}
    </View>
  )
}

const MyReviewsPage = () => {
  const { reviews, currentUser } = useCurrentUser(true)

  return (
    <FlatList
      style={{ flex: 0 }}
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem key={item.id} entry={{ ...item, user: { username: currentUser.username } }} showActions={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<ReviewPageHeader isEmptyList={reviews.length === 0} />}
      ListHeaderComponentStyle={{ marginBottom: 1.5 * REM }}
    />
  )
}

export default MyReviewsPage
