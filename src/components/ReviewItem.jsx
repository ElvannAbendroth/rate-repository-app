import { StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'

import theme from '../utils/theme'

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

const ReviewItem = ({ entry }) => {
  if (entry === undefined) return <Text>...loading</Text>
  const ratingColor =
    entry.rating < 61 ? theme.colors.danger : entry.rating < 71 ? theme.colors.warning : theme.colors.success

  const createdAtFormatted = new Date(entry.createdAt).toDateString()
  return (
    <View style={styles.root}>
      <View style={styles.headerSection}>
        <View style={{ ...styles.ratingWrapper, borderColor: ratingColor }}>
          <Text style={{ ...styles.ratingText, color: ratingColor }}>{entry.rating}</Text>
        </View>
        <View>
          <Text style={styles.nameText}>{entry.user.username}</Text>
          <Text style={{ paddingTop: 0.5 * REM }} muted>
            {createdAtFormatted}
          </Text>
        </View>
      </View>
      <Text style={{ color: theme.colors.muted }}>{entry.text}</Text>
    </View>
  )
}

export default ReviewItem
