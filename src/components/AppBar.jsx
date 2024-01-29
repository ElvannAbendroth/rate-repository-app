import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import Text from './ui/Text'
import theme from '../utils/theme'
import { Link } from 'react-router-native'
import useSignOut from '../hooks/useSignOut'
import { BookMarked, LogIn, LogOut, MessageSquare, Pencil, UserPlus } from 'lucide-react-native'
import useCurrentUser from '../hooks/useCurrentUser'

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

  // ...
})

const AppBar = () => {
  const { isAuthenticated } = useCurrentUser()

  return (
    <View style={styles.root}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" to="/" icon={BookMarked} />

        {isAuthenticated ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AppBarTab label="Create a Review" to="/create-review" icon={Pencil} />
            <AppBarTab label="My Reviews" to="/my-reviews" icon={MessageSquare} />
            <SignOutTab />
          </View>
        ) : (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AppBarTab label="Sign In" to="/sign-in" icon={LogIn} />
            <AppBarTab label="Sign Up" to="/sign-up" icon={UserPlus} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar

const AppBarTab = ({ label, to, icon, ...props }) => {
  const Icon = icon
  return (
    <Link to={to} {...props}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 1 * REM,
          paddingHorizontal: 0.75 * REM,
        }}
      >
        {Icon && <Icon color={theme.colors.foreground} size={1.5 * REM} style={{ marginRight: 0.5 * REM }} />}
        <Text bold style={styles.tabText}>
          {label}
        </Text>
      </View>
    </Link>
  )
}

const SignOutTab = () => {
  const [signOut] = useSignOut()

  const handlePress = () => {
    signOut()
  }

  return (
    <Pressable
      onPress={handlePress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 1 * REM,
        paddingHorizontal: 0.75 * REM,
      }}
    >
      <LogOut color={theme.colors.foreground} size={1.5 * REM} style={{ marginRight: 0.5 * REM }} />
      <Text bold>Sign Out</Text>
    </Pressable>
  )
}
