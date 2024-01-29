import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const IndexPage = () => {
  const { repositories, setOrderBy, setOrderDirection, setSearchKeyword } = useRepositories()

  return (
    <RepositoryList
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      setSearchKeyword={setSearchKeyword}
    />
  )
}

export default IndexPage
