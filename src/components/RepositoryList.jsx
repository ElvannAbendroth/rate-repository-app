import { FlatList, View, StyleSheet, Image } from 'react-native'
import Text from './ui/Text'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 66,
    height: 58,
  },
})

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
]

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  return (
    <FlatList
      className="flex flex-col pt-3 "
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View className="bg-slate-800 rounded-md shadow-md p-4">
          <View className="flex flex-row gap-4 mb-3 items-center">
            <Image
              style={styles.tinyLogo}
              className="rounded-full"
              source={{
                uri: 'https://media.istockphoto.com/id/1167753373/vector/woman-avatar-isolated-on-white-background-vector-illustration-for-your-design.jpg?s=612x612&w=0&k=20&c=Y2a_YXRjZ3bXa3Jn2EStSXv7hJly0uEkdlWk4tdbI6U=',
              }}
            />
            <Text className="font-bold">{item.fullName}</Text>
          </View>

          <Text className="mb-5">{item.description}</Text>
          <View variant="small" className="flex flex-row flex-wrap line gap-3 mb-5">
            <Text variant="small" className="items-center">
              💻 {item.language}
            </Text>
            <Text variant="small">⭐ {item.stargazersCount}</Text>
            <Text variant="small">🍴 {item.forksCount}</Text>
          </View>

          <View className="flex flex-row flex-wrap line gap-3">
            <Text variant="small">💬 {item.reviewCount}</Text>
            <Text variant="small">✅ {item.ratingAverage}</Text>
          </View>
        </View>
      )}
      // other props
    />
  )
}

export default RepositoryList
