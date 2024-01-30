import { FlatList, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../utils/theme'
import SortOrderPicker from './SortOrderPicker'
import { useState } from 'react'

const REM = theme.fontSizes.body

const ItemSeparator = () => (
  <View
    style={{
      height: 0.75 * REM,
    }}
  />
)

const RepositoryList = ({ repositories, setOrderBy, setOrderDirection, setSearchKeyword, onEndReach }) => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

  const handleEndReached = () => {
    if (!initialLoadComplete) {
      // Ignore end reached event during initial load
      return
    }
    onEndReach()
  }

  return (
    <FlatList
      style={{ flex: 0 }}
      data={repositoryNodes}
      ListHeaderComponent={
        <SortOrderPicker
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
          setSearchKeyword={setSearchKeyword}
        />
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem entry={item} />}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      onContentSizeChange={() => setInitialLoadComplete(true)} // Mark initial load complete when content size changes
    />
  )
}

export default RepositoryList
