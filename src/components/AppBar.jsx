import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import Text from './ui/Text'
import theme from '../utils/theme'
import { Link } from 'react-router-native'
import useSession from '../hooks/useSession'
import useSignOut from '../hooks/useSignOut'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  root: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 1 * REM,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderColor: theme.colors.foreground + '0A', //05 === 4% opacity
  },
  tabText: {
    paddingVertical: 1 * REM,
    paddingHorizontal: 0.75 * REM,
  },

  // ...
})

const AppBar = () => {
  const { isAuthenticated } = useSession()

  return (
    <View style={styles.root}>
      <ScrollView horizontal>
        {/* ... */}
        <AppBarTab label="Repositories" to="/" />
        {isAuthenticated ? <SignOutTab /> : <AppBarTab label="Sign In" to="/sign-in" />}
      </ScrollView>
    </View>
  )
}

export default AppBar

const AppBarTab = ({ label, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      <Text bold style={styles.tabText}>
        {label}
      </Text>
    </Link>
  )
}

const SignOutTab = () => {
  const [signOut] = useSignOut()

  const handlePress = () => {
    signOut()
  }

  return (
    <Pressable onPress={handlePress}>
      <Text bold style={styles.tabText}>
        Sign Out
      </Text>
    </Pressable>
  )
}
