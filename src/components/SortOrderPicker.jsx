import { Button } from '@rneui/base'
import { View } from 'react-native'
import Text from './ui/Text'
import theme from '../utils/theme'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { ArrowDown, ChevronDown, ChevronUp } from 'lucide-react-native'

const REM = theme.fontSizes.body

const SortOrderPicker = ({ setOrderBy, setOrderDirection }) => {
  const [selectedOption, setSelectedOption] = useState()
  const [isShowPicker, setIsShowPicker] = useState(false)

  return (
    <View style={{ paddingBottom: 1 * REM }}>
      <Button
        color="primary"
        onPress={() => setIsShowPicker(!isShowPicker)}
        icon={
          isShowPicker ? (
            <ChevronUp size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />
          ) : (
            <ChevronDown size={1.5 * REM} style={{ color: theme.colors.foreground, paddingRight: 3 * REM }} />
          )
        }
      >
        Sort Repositories
      </Button>

      {isShowPicker && (
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => {
            setSelectedOption(itemValue)
            setOrderBy(itemValue.split('-')[0])
            setOrderDirection(itemValue.split('-')[1])
          }}
        >
          <Picker.Item color={theme.colors.foreground} label="Latest Repositories" value="CREATED_AT-DESC" />
          <Picker.Item color={theme.colors.foreground} label="Highest Rated Repositories" value="RATING_AVERAGE-DESC" />
          <Picker.Item color={theme.colors.foreground} label="Lowest Rated Repositories" value="RATING_AVERAGE-ASC" />
        </Picker>
      )}
    </View>
  )
}

export default SortOrderPicker
