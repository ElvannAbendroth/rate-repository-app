import { Skeleton } from '@rneui/themed'
import theme from '../utils/theme'

const CardSkeleton = () => {
  return (
    <Skeleton
      animation="pulse"
      style={{ backgroundColor: theme.colors.foreground + '03' }}
      skeletonStyle={{ backgroundColor: theme.colors.foreground + '10' }}
      height={40}
    />
  )
}

export default CardSkeleton
