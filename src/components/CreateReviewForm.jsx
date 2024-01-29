import { Pressable, StyleSheet, Text, View } from 'react-native'
import theme from '../utils/theme'
import FormikTextInput from './ui/FormikTextInput'

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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View styles={{ display: 'flex', gap: REM }}>
      <FormikTextInput name="ownerName" placeholder="Repository owner's name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating (0-100)" />
      <FormikTextInput multiline style={{ paddingTop: 1.5 * REM }} name="text" placeholder="Review" />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={{ textAlign: 'center' }}>Send Review</Text>
      </Pressable>
    </View>
  )
}

export default CreateReviewForm
