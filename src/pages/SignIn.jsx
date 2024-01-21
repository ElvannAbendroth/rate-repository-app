import { StyleSheet, View } from 'react-native'
import Text from '../components/ui/Text'
import theme from '../utils/theme'

const REM = theme.fontSizes.body
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
})

const SignIn = () => {
  return (
    <View styles={styles.root}>
      <Text>The sign-in view</Text>
    </View>
  )
}

export default SignIn
