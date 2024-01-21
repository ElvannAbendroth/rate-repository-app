import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Text from './ui/Text'
import theme from '../utils/theme'
import { Link } from 'react-router-native'

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
  return (
    <View style={styles.root}>
      <ScrollView horizontal>
        {/* ... */}
        <AppBarTab label="Repositories" to="/" />
        <AppBarTab label="Sign In" to="/sign-in" />
      </ScrollView>
    </View>
  )
}

export default AppBar

const AppBarTab = ({ label, to }) => {
  return (
    <Link to={to}>
      <Text bold style={styles.tabText}>
        {label}
      </Text>
    </Link>
  )
}
