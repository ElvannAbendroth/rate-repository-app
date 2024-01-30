import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const IndexPage = () => {
  const { repositories, setOrderBy, setOrderDirection, setSearchKeyword, fetchMore } = useRepositories()

  const onEndReach = () => {
    //console.log('You have reached the end of the list')
    fetchMore()
  }

  return (
    <RepositoryList
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  )
}

export default IndexPage
