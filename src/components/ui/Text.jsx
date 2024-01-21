import { Text as NativeText, StyleSheet } from 'react-native'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
  base: {
    color: theme.colors.foreground,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  subheader: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  header: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  large: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  muted: {
    color: theme.colors.muted,
  },
})

const Text = ({ variant, muted, bold, style, ...props }) => {
  const textStyle = [
    styles.base,
    variant === 'header' && styles.header,
    variant === 'subheader' && styles.subheader,
    variant === 'large' && styles.large,
    variant === 'base' && styles.body,
    bold && styles.fontWeightBold,
    muted && styles.muted,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text

//test
