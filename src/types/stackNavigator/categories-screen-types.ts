import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RouteParamList';

type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'categories'>;
type CategoriesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'categories'
>;

export type CategoriesProps = {
  route: CategoriesScreenRouteProp;
  navigation: CategoriesScreenNavigationProp;
};
