import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FavStackParamList } from './RouteParamList';

type FavoritescreenRouteProp = RouteProp<FavStackParamList, 'Favorite'>;
type FavoriteScreenNavigationProp = StackNavigationProp<
  FavStackParamList,
  'Favorite'
>;

export type FavoriteProps = {
  route: FavoritescreenRouteProp;
  navigation: FavoriteScreenNavigationProp;
};
