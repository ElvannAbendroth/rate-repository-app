import { View, StyleSheet, Pressable, Alert } from 'react-native'
import Constants from 'expo-constants'
import Text from './ui/Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
})

const AppBar = () => {
  return (
    <View
      style={styles.container}
      className="flex flex-row justify-around  px-4 bg-grey-900 border-b-[1px] border-foreground/[4%]"
    >
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
      <Text variant="subheader" className="py-4">
        {label}
      </Text>
    </Pressable>
  )
}
