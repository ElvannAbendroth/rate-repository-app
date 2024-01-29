import { FlatList, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../utils/theme'
import SortOrderPicker from './SortOrderPicker'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const RepositoryList = ({ repositories, setOrderBy, setOrderDirection }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      style={{ flex: 0 }}
      data={repositoryNodes}
      ListHeaderComponent={<SortOrderPicker setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} />}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem entry={item} />}
    />
  )
}

export default RepositoryList
