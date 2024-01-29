import { Button } from '@rneui/base'
import { KeyboardAvoidingView, View } from 'react-native'
import theme from '../utils/theme'
import { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { ChevronDown, ChevronUp } from 'lucide-react-native'
import TextInput from './ui/TextInput'
import { useDebounce } from 'use-debounce'

const REM = theme.fontSizes.body

const SortOrderPicker = ({ setOrderBy, setOrderDirection, setSearchKeyword }) => {
  const [selectedOption, setSelectedOption] = useState()
  const [isShowPicker, setIsShowPicker] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [debouncedInput] = useDebounce(inputValue, 500)

  useEffect(() => {
    setSearchKeyword(debouncedInput)
  }, [debouncedInput])

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
        Filtering Options
      </Button>

      {isShowPicker && (
        <>
          <KeyboardAvoidingView
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 1 * REM }}
            behavior="padding"
            enabled
            keyboardVerticalOffset={100}
          >
            <TextInput
              placeholder="Search by keyword"
              value={inputValue}
              onChangeText={value => setInputValue(value)}
            />
          </KeyboardAvoidingView>
          <Picker
            selectedValue={selectedOption}
            onValueChange={itemValue => {
              setSelectedOption(itemValue)
              setOrderBy(itemValue.split('-')[0])
              setOrderDirection(itemValue.split('-')[1])
            }}
          >
            <Picker.Item color={theme.colors.foreground} label="Latest Repositories" value="CREATED_AT-DESC" />
            <Picker.Item
              color={theme.colors.foreground}
              label="Highest Rated Repositories"
              value="RATING_AVERAGE-DESC"
            />
            <Picker.Item color={theme.colors.foreground} label="Lowest Rated Repositories" value="RATING_AVERAGE-ASC" />
          </Picker>
        </>
      )}
    </View>
  )
}

export default SortOrderPicker
