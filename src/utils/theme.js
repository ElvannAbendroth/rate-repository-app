import { Platform } from 'react-native'

const REM = 14

const theme = {
  colors: {
    foreground: '#fafafa', //zinc-50
    primary: '#A855F7', //purple-500
    secondary: '#3b82f6', //blue-500
    muted: '#A1A1AA', //zinc-400
    background: '#18181b', //zinc-900
    danger: '#F43F5E', //rose-500
    brands: {
      DEFAULT: '#A1A1AA', //zinc-400
      TypeScript: '#3b82f6', //blue-500
      Python: '#06B6D4', //cyan-500
      Ruby: '#EF4444', //red-500
      JavaScript: '#FACC15', //yellow-400
    },
  },
  fontSizes: {
    body: 1 * REM,
    subheading: 1.25 * REM,
    heading: 1.5 * REM,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borderRadius: {
    lg: 0.5 * REM,
  },
}

export default theme
