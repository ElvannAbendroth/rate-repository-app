import { StyleSheet, View } from 'react-native'
import RepositoryPage from './pages/RepositoryPage'
import AppBar from './components/AppBar'
import { Route, Routes, Navigate } from 'react-router-native'
import SignInPage from './pages/SignInPage'
import theme from './utils/theme'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  body: {
    color: theme.colors.foreground,
    backgroundColor: theme.colors.background,
    display: 'flex',
    flexGrow: 1,
  },
  pageWrapper: {
    paddingHorizontal: 0.75 * REM,
    paddingVertical: REM,
    flex: 1,
    marginBottom: 1.5 * REM,
  },
})

const Main = () => {
  return (
    <View style={styles.body}>
      <AppBar />
      <View style={styles.pageWrapper}>
        <Routes>
          <Route path="/" element={<RepositoryPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </View>
  )
}

export default Main
