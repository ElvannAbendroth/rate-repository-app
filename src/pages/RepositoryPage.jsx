import useRepositories from '../hooks/useRepositories'
import RepositoryList from '../components/RepositoryList'

const RepositoryPage = () => {
  const { repositories } = useRepositories()

  return <RepositoryList repositories={repositories} />
}

export default RepositoryPage
