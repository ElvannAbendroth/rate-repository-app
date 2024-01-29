import { View, StyleSheet, Image, Pressable } from 'react-native'
import Text from './ui/Text'
import { GitFork, Github, MessageSquare, Star, Trophy } from 'lucide-react-native'
import theme from '../utils/theme'
import StatItem from './StatItem'
import { Button } from '@rneui/themed'
import * as Linking from 'expo-linking'
import { useNavigate } from 'react-router-native'

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
    backgroundColor: theme.colors.card + '', // sets to 2% opacity
    borderRadius: theme.borderRadius.lg,
    padding: 1 * REM,
  },
})

const RepositoryItem = ({ entry, isSinglePage }) => {
  // eslint-disable-next-line no-prototype-builtins
  const languageColor = theme.colors.brands[entry.language]
    ? theme.colors.brands[entry.language]
    : theme.colors.brands.DEFAULT

  const navigate = useNavigate()

  return (
    <Pressable onPress={() => navigate(`/repository?repositoryId=${entry.id}`)}>
      <View testID="repositoryItem" style={styles.root}>
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
          <View style={{ ...styles.languageBadge, backgroundColor: languageColor }}></View>
          <Text style={styles.languageText}>{entry.language}</Text>
        </View>
        <View style={styles.statList}>
          <StatItem stat={entry.stargazersCount} icon={Star} />
          <StatItem stat={entry.forksCount} icon={GitFork} />
          <StatItem stat={entry.reviewCount} icon={MessageSquare} />
          <StatItem stat={entry.ratingAverage} icon={Trophy} />
        </View>
        {isSinglePage && (
          <Button
            color="primary"
            style={{ paddingTop: 1.5 * REM }}
            onPress={() => Linking.openURL(entry.url)}
            icon={<Github size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />}
          >
            Open in GitHub
          </Button>
        )}
      </View>
    </Pressable>
  )
}

export default RepositoryItem
