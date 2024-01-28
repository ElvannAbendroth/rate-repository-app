import { StyleSheet, View } from 'react-native'
import RepositoryListPage from './pages/RepositoryListPage'
import AppBar from './components/AppBar'
import { Route, Routes, Navigate } from 'react-router-native'
import SignInPage from './pages/SignInPage'
import theme from './utils/theme'
import RepositoryPage from './pages/RepositoryPage'

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
          <Route path="/" element={<RepositoryListPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/repository" element={<RepositoryPage />} />
        </Routes>
      </View>
    </View>
  )
}

export default Main
