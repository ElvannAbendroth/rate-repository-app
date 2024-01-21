import { View, StyleSheet, Image } from 'react-native'
import Text from './ui/Text'
import { GitFork, MessageSquare, Star, Trophy } from 'lucide-react-native'
import theme from '../utils/theme'
import StatItem from './StatItem'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  statList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 12,
  },
  languageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 1.5 * REM,
    alignItems: 'center',
  },
  languageBadge: {
    borderRadius: 100,
    height: 0.5 * REM,
    width: 0.5 * REM,
    backgroundColor: theme.colors.primary,
  },
  languageText: {
    color: theme.colors.muted,
    paddingHorizontal: 0.5 * REM,
    paddingVertical: 0.25 * REM,
  },
  description: {
    marginBottom: 1 * REM,
  },
  nameText: {
    fontWeight: 'bold',
  },
  profileImage: {
    borderRadius: 100,
    height: 2.5 * REM,
    width: 2.5 * REM,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0.75 * REM,
    marginBottom: 1.25 * REM,
    alignItems: 'center',
  },
  root: {
    backgroundColor: theme.colors.foreground + '05', // sets to 2% opacity
    rounded: theme.borderRadius.lg,
    padding: 1 * REM,
  },
})

const RepositoryItem = ({ entry }) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerSection}>
        <Image
          style={styles.profileImage}
          source={{
            uri: entry.ownerAvatarUrl,
          }}
        />
        <Text style={styles.nameText}>{entry.fullName}</Text>
      </View>

      <Text variant={'large'} style={styles.description}>
        {entry.description}
      </Text>
      <View style={styles.languageWrapper}>
        <View style={styles.languageBadge}></View>
        <Text style={styles.languageText}>{entry.language}</Text>
      </View>

      <View style={styles.statList}>
        <StatItem stat={entry.stargazersCount} icon={Star} />
        <StatItem stat={entry.forksCount} icon={GitFork} />
        <StatItem stat={entry.reviewCount} icon={MessageSquare} />
        <StatItem stat={entry.ratingAverage} icon={Trophy} />
      </View>
    </View>
  )
}

export default RepositoryItem
