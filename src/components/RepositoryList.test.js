import { render, screen, within } from '@testing-library/react-native'
import RepositoryList from './RepositoryList'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      render(<RepositoryList repositories={repositories} />)

      const repositoryItems = screen.getAllByTestId('repositoryItem')

      expect(repositoryItems.length).toBe(2)

      expect(within(repositoryItems[0]).getByText('jaredpalmer/formik')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('Build forms in React, without the tears')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('TypeScript')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('1.6k')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('21.9k')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('88')).toBeDefined()
      expect(within(repositoryItems[0]).getByText('3')).toBeDefined()

      expect(within(repositoryItems[1]).getByText('JavaScript')).toBeDefined()

      //It's unnecessary to assert all properties on all items; asserting some of each should be good enough for a robust test 👍
    })
  })
})
