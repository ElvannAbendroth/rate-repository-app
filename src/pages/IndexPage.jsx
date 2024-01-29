import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const IndexPage = () => {
  const { repositories, setOrderBy, setOrderDirection } = useRepositories()

  return <RepositoryList repositories={repositories} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} />
}

export default IndexPage
