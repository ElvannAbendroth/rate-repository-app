import { Text as NativeText } from 'react-native'

import { cn } from '../../utils/cn'
import { cva } from 'class-variance-authority'

// const styles = StyleSheet.create({
//   text: {
//     color: theme.colors.textPrimary,
//     fontSize: theme.fontSizes.body,
//     fontFamily: theme.fonts.main,
//     fontWeight: theme.fontWeights.normal,
//   },
//   colorTextSecondary: {
//     color: theme.colors.textSecondary,
//   },
//   colorPrimary: {
//     color: theme.colors.primary,
//   },
//   fontSizeSubheading: {
//     fontSize: theme.fontSizes.subheading,
//   },
//   fontSizeHeading: {
//     fontSize: theme.fontSizes.heading,
//   },
//   fontWeightBold: {
//     fontWeight: theme.fontWeights.bold,
//   },
// })

const textVariants = cva(['text-foreground'], {
  variants: {
    variant: {
      body: 'text-md',
      small: 'text-sm text-muted',
      heading: 'text-xl font-bold',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

const Text = ({ variant, className, ...props }) => {
  return <NativeText className={cn(textVariants({ variant, className }))} {...props} />
}

export default Text
