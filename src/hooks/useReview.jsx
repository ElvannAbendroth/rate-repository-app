import { useMutation } from '@apollo/client'
import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations'

import { useNavigate } from 'react-router-native'

const useReview = () => {
  const navigate = useNavigate()

  const [mutateCreate, resultCreate] = useMutation(CREATE_REVIEW)
  const [mutateDelete] = useMutation(DELETE_REVIEW)

  const createReview = async (ownerName, repositoryName, rating, text) => {
    try {
      const { data } = await mutateCreate({
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

  const deleteReview = async reviewId => {
    try {
      await mutateDelete({
        variables: {
          deleteReviewId: reviewId,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { createReview, resultCreate, deleteReview }
}

export default useReview
