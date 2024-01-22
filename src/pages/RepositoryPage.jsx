import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../components/RepositoryItem'
import theme from '../utils/theme'
import useRepositories from '../hooks/useRepositories'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  root: {},
  separator: {
    height: 0.75 * REM,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryPage = () => {
  const { repositories } = useRepositories()

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      style={{ flex: 0 }}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem entry={item} />}
    />
  )
}

export default RepositoryPage
