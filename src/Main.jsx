import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'

const styles = StyleSheet.create({
  body: {
    color: '#fff',
  },
})

const Main = () => {
  return (
    <View style={styles.body} className="bg-background">
      <AppBar />
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  )
}

export default Main
