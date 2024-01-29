import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

import { useNavigate } from 'react-router-native'

const useCreateReview = () => {
  const navigate = useNavigate()

  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async (ownerName, repositoryName, rating, text) => {
    try {
      const { data } = await mutate({
        variables: {
          ownerName: ownerName,
          rating: Number(rating),
          repositoryName: repositoryName,
          text: text,
        },
      })

      navigate(`/repository?repositoryId=${data.createReview.repositoryId}`)
    } catch (error) {
      console.error(error)
    }
  }

  return { createReview, result }
}

export default useCreateReview
