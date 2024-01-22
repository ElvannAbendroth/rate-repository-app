import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../../utils/theme'

const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  errorText: {
    paddingBottom: 1.5 * REM,
    color: theme.colors.danger,
  },
  errorInput: {
    borderColor: theme.colors.danger,
    borderLeftWidth: 2,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        style={showError && styles.errorInput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholderTextColor={theme.colors.muted + '66'} // 66 = 40% opacity
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
