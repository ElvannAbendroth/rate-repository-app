import { Pressable, StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'
import { Formik } from 'formik'
import theme from '../utils/theme'
import FormikTextInput from '../components/ui/FormikTextInput'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useState } from 'react'

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
}

const SignIn = () => {
  return (
    <View styles={styles.root}>
      <Text variant={'header'} style={{ marginBottom: REM }}>
        Sign In
      </Text>
      <FormikContext />
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const FormikContext = () => {
  const [token, setToken] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [signIn, result] = useSignIn()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      signIn(username, password)
      console.log(result.data)
      setToken(result.data.authenticate.accessToken)
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

const SignInForm = ({ onSubmit }) => {
  return (
    <View styles={{ display: 'flex', gap: REM }}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={{ textAlign: 'center' }}>Login</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
