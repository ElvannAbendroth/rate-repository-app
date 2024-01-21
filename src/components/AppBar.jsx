import { View, StyleSheet, Pressable, Alert } from 'react-native'
import Constants from 'expo-constants'
import Text from './ui/Text'
import theme from '../utils/theme'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  root: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 1 * REM,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderColor: theme.colors.foreground + '0A', //05 === 4% opacity
  },
  tabText: {
    paddingVertical: 1 * REM,
  },

  // ...
})

const AppBar = () => {
  return (
    <View style={styles.root}>
      <AppBarTab label="Repositories" />
      <AppBarTab label="Liked" />
      <AppBarTab label="Settings" />
    </View>
  )
}

export default AppBar

const AppBarTab = ({ label }) => {
  return (
    <Pressable onPress={() => Alert.alert('You pressed the text!')}>
      <Text bold style={styles.tabText}>
        {label}
      </Text>
    </Pressable>
  )
}
