import { Alert, StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'
import { Button } from '@rneui/themed'

import theme from '../utils/theme'
import CardSkeleton from './CardSkeleton'
import { Github, X } from 'lucide-react-native'
import useReview from '../hooks/useReview'
import { useNavigate } from 'react-router-native'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.card + '', // sets to 2% opacity
    borderRadius: theme.borderRadius.lg,
    padding: 1 * REM,
    borderColor: theme.colors.muted + '50',
    borderLeftWidth: 3,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0.75 * REM,
    marginBottom: 1.25 * REM,
    alignItems: 'center',
  },
  nameText: {
    fontWeight: 'bold',
  },
  ratingWrapper: {
    borderWidth: 4,

    borderRadius: (4 * REM) / 2,
    height: 4 * REM,
    width: 4 * REM,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    padding: 0.75 * REM,
    color: theme.colors.foreground,
    fontWeight: 'bold',
    fontSize: 1.25 * REM,
  },
})

const ReviewItem = ({ entry, showActions }) => {
  const navigate = useNavigate()
  const { deleteReview } = useReview()

  if (entry === undefined) return <CardSkeleton />
  const ratingColor =
    entry.rating < 61 ? theme.colors.danger : entry.rating < 71 ? theme.colors.warning : theme.colors.success

  const createdAtFormatted = new Date(entry.createdAt).toDateString()

  const handleReviewDelete = () => {
    Alert.alert('Delete Review', 'Do you really want to delete this review?  This action is irreversible.', [
      {
        text: 'Yes, delete this review.',
        onPress: () => {
          deleteReview(entry.id)
          navigate('/')
        },
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ])
    //Alert.alert('boo!')
  }

  return (
    <View style={styles.root}>
      <View style={styles.headerSection}>
        <View style={{ ...styles.ratingWrapper, borderColor: ratingColor }}>
          <Text style={{ ...styles.ratingText, color: ratingColor }}>{entry.rating}</Text>
        </View>
        <View>
          <Text style={styles.nameText}>{entry.user.username}</Text>
          {showActions && (
            <Text style={{ paddingTop: 0.5 * REM, color: theme.colors.foreground }}>{entry.repository.fullName}</Text>
          )}
          <Text style={{ paddingTop: 0.5 * REM }} muted>
            {createdAtFormatted}
          </Text>
        </View>
      </View>
      <Text variant="large" style={{ color: theme.colors.muted }}>
        {entry.text}
      </Text>

      {showActions && (
        <View>
          <Button
            color="primary"
            style={{ paddingTop: 1 * REM }}
            onPress={() => navigate(`/repository?repositoryId=${entry.repository.id}`)}
            icon={<Github size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />}
          >
            View Repository
          </Button>
          <Button
            color="secondary"
            style={{ paddingTop: 1 * REM }}
            onPress={handleReviewDelete}
            icon={<X size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />}
          >
            Delete Review
          </Button>
        </View>
      )}
    </View>
  )
}

export default ReviewItem
