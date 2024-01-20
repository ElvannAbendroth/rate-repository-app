import Constants from 'expo-constants'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
})

const Main = () => {
  return (
    <View style={styles.container} className="flex flex-grow flex-shrink px-4 ">
      <Text className="text-2xl font-bold">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
