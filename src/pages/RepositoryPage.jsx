import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'
import { useLocation } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from '../components/RepositoryItem'
import useReviews from '../hooks/useReviews'
import theme from '../utils/theme'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  statList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 12,
  },

  description: {
    marginBottom: 1 * REM,
  },
  nameText: {
    fontWeight: 'bold',
  },

  ratingWrapper: {
    borderWidth: 4,
    borderColor: theme.colors.primary,
    borderRadius: '50',
  },
  ratingText: {
    padding: 0.75 * REM,
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 1.5 * REM,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0.75 * REM,
    marginBottom: 1.25 * REM,
    alignItems: 'center',
  },
  root: {
    backgroundColor: theme.colors.card + '', // sets to 2% opacity
    borderRadius: theme.borderRadius.lg,
    padding: 1 * REM,
  },
})

const RepositoryPage = () => {
  const location = useLocation()
  // eslint-disable-next-line no-undef
  const searchParams = new URLSearchParams(location.search)
  const userId = searchParams.get('userId')
  const repository = useRepository(userId)
  const reviews = useReviews(userId)
  //console.log(reviews.reviews)

  if (repository.repository === undefined) return <Text>...loading</Text>
  if (reviews.reviews === undefined) return <Text>...loading</Text>
  return (
    <View>
      <RepositoryItem entry={repository.repository} isSinglePage={true} />
      <Text variant="subheader" style={{ paddingTop: 1.5 * REM, paddingBottom: 1 * REM }}>
        Reviews
      </Text>
      {reviews.reviews.map(entry => (
        <ReviewItem key={entry.node.id} entry={entry.node} />
      ))}
    </View>
  )
}

const ReviewItem = ({ entry }) => {
  console.log(entry)

  /** displays:
   * text
   * createdAt
   * user {reviewer info of type User}
   * display as a scrollable list Flatlist
   */
  return (
    <View style={styles.root}>
      <View style={styles.headerSection}>
        <View style={styles.ratingWrapper}>
          <Text style={styles.ratingText}>{entry.rating}</Text>
        </View>
        <View>
          <Text style={styles.nameText}>{entry.user.username}</Text>
          <Text style={{ paddingTop: 0.5 * REM }} muted>
            {entry.createdAt}
          </Text>
        </View>
      </View>
      <Text>{entry.text}</Text>
    </View>
  )
}

// const SingleRepository = () => {
//   // ...

//   return (
//     <FlatList
//       data={reviews}
//       renderItem={({ item }) => <ReviewItem review={item} />}
//       keyExtractor={({ id }) => id}
//       ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
//       // ...
//     />
//   );
// };

export default RepositoryPage
