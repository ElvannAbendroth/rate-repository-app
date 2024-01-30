import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Text from '../components/ui/Text'
import { Formik } from 'formik'
import theme from '../utils/theme'
import * as yup from 'yup'

import CreateReviewForm from '../components/CreateReviewForm'
import useReview from '../hooks/useReview'

const REM = theme.fontSizes.body
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  input: {
    paddingHorizontal: 1 * REM,
    paddingVertical: 1.5 * REM,
    backgroundColor: theme.colors.foreground + '05',
    borderRadius: theme.borderRadius.lg,
    color: theme.colors.muted,
    marginBottom: REM,
  },
  button: {
    paddingHorizontal: 1 * REM,
    paddingVertical: 1.5 * REM,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    color: theme.colors.foreground,
  },
})

const initialValues = {
  ownerName: 'elvannabendroth',
  repositoryName: 'everything-music',
  rating: '99',
  text: 'Great!',
}

const CreateReviewPage = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView styles={styles.root}>
        <Text variant={'header'} style={{ marginBottom: REM }}>
          Create a Review
        </Text>
        <ReviewFormWrapper />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner is a required field'),
  repositoryName: yup.string().required('Repository name is a required field'),
  rating: yup.number().min(0, 'Rating must be between 0 and 100').max(100).required('Rating must be between 0 and 100'),
  text: yup.string(),
})

const ReviewFormWrapper = () => {
  const { createReview } = useReview()

  const onSubmit = async values => {
    const { ownerName, repositoryName, rating, text } = values

    try {
      createReview(ownerName, repositoryName, rating, text)
    } catch (error) {
      Alert.alert(`${error}`)
      console.error(error)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReviewPage
