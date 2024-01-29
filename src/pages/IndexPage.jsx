import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const IndexPage = () => {
  const { repositories } = useRepositories()

  return <RepositoryList repositories={repositories} />
}

export default IndexPage
