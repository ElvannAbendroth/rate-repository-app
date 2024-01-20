import { FlatList, View, StyleSheet, Image } from 'react-native'
import Text from './ui/Text'
import { GitFork, MessageSquare, Star, Trophy } from 'lucide-react-native'

const styles = StyleSheet.create({
  separator: {
    height: 10,
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
      className="flex flex-col pt-3 px-4 "
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View className="bg-foreground/[2%] rounded-lg shadow-md p-4">
          <View className="flex flex-row gap-3 mb-5 items-center">
            <Image
              style={styles.tinyLogo}
              className="rounded-full h-10 w-10"
              source={{
                uri: item.ownerAvatarUrl,
              }}
            />
            <Text className="font-bold">{item.fullName}</Text>
          </View>

          <Text variant={'large'} className="mb-4">
            {item.description}
          </Text>
          <View className="flex flex-row line mb-5 items-center">
            <View className="rounded-full h-2 w-2 bg-primary"></View>
            <Text className=" py-1 px-2 text-muted">{item.language}</Text>
          </View>

          <View className="flex flex-row justify-around flex-wrap line gap-3">
            <View className="flex justify-center">
              <Text variant="" className="mb-2 font-bold">
                {(item.stargazersCount / 1000).toFixed(1)}k
              </Text>
              <View className="flex items-center text-center">
                <Star className="text-muted " size={18} />
              </View>
            </View>
            <View className="flex">
              <Text variant="" className="mb-2 font-bold">
                {(item.forksCount / 1000).toFixed(1)}k
              </Text>
              <View className="flex items-center text-center">
                <GitFork className="text-muted " size={18} />
              </View>
            </View>
            <View className="flex">
              <Text variant="" className="mb-2 font-bold">
                {item.reviewCount}
              </Text>
              <View className="flex items-center text-center">
                <MessageSquare className="text-muted " size={18} />
              </View>
            </View>
            <View className="flex">
              <Text variant="" className="mb-2 font-bold">
                {' '}
                {item.ratingAverage}
              </Text>
              <View className="flex items-center text-center">
                <Trophy className="text-muted " size={18} />
              </View>
            </View>
          </View>
        </View>
      )}
      // other props
    />
  )
}

export default RepositoryList
