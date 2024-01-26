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

const SignInForm = ({ onSubmit }) => {
  return (
    <View styles={{ display: 'flex', gap: REM }}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />

      <Pressable testID="submitButton" style={styles.button} onPress={onSubmit}>
        <Text style={{ textAlign: 'center' }}>Login</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
