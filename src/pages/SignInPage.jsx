import { StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'
import { Formik } from 'formik'
import theme from '../utils/theme'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import SignInForm from '../components/SignInForm'

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
  username: 'kalle',
  password: 'password',
}

const SignInPage = () => {
  return (
    <View styles={styles.root}>
      <Text variant={'header'} style={{ marginBottom: REM }}>
        Sign In
      </Text>
      <SignInFormWrapper />
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignInFormWrapper = () => {
  // eslint-disable-next-line no-unused-vars
  const [signIn, result] = useSignIn()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      signIn(username, password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInPage
