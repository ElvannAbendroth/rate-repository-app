import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Text from '../components/ui/Text'
import { Formik } from 'formik'
import theme from '../utils/theme'
import * as yup from 'yup'

import SignUpForm from '../components/SignUpForm'
import useSignUp from '../hooks/useSignUp'

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
  username: '',
  password: '',
  confirmPassword: '',
}

const SignUpPage = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView styles={styles.root}>
        <Text variant={'header'} style={{ marginBottom: REM }}>
          Sign Up
        </Text>
        <SignUpWrapper />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

const SignUpWrapper = () => {
  const { createUser } = useSignUp()

  const onSubmit = async values => {
    const { username, password, confirmPassword } = values

    try {
      if (password != confirmPassword) throw new Error(`Passwords don't match!`)
      createUser(username, password)
    } catch (error) {
      Alert.alert(`${error}`)
      console.error(error)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUpPage
