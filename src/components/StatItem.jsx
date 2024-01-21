import { View, StyleSheet } from 'react-native'
import Text from './ui/Text'

import theme from '../utils/theme'
const REM = theme.fontSizes.body

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  root: {
    display: 'flex',
    flexBasis: 'row',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 0.5 * REM,
    fontWeight: 'bold',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    color: theme.colors.muted,
  },
})

const StatItem = ({ stat, icon }) => {
  const Icon = icon
  const formattedStat = stat > 999 ? `${(stat / 1000).toFixed(1).toString()}k` : stat
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{formattedStat}</Text>
      <View style={styles.iconWrapper}>
        <Icon style={styles.icon} size={18} />
      </View>
    </View>
  )
}

export default StatItem
