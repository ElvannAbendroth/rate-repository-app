import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import Text from './components/ui/Text'

const styles = StyleSheet.create({
  body: {
    paddingTop: Constants.statusBarHeight,
    color: '#fff',
  },
})

const Main = () => {
  return (
    <View style={styles.body} className="bg-slate-900 flex flex-grow flex-shrink px-3 ">
      <Text variant="heading">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
