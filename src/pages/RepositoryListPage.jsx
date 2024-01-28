import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const RepositoryListPage = () => {
  const { repositories } = useRepositories()

  return <RepositoryList repositories={repositories} />
}

export default RepositoryListPage
