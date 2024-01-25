import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../../utils/theme'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 1 * REM,
    paddingVertical: 1.5 * REM,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    color: theme.colors.muted,
    marginBottom: REM,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input]

  return <NativeTextInput style={textInputStyle} {...props} error={error} />
}

export default TextInput
