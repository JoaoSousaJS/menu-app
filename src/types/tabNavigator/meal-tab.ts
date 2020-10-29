import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../stackNavigator/RouteParamList';

type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'categories'>;
type CategoriesScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'categories'
>;

export type TabCategoriesProps = {
  route: CategoriesScreenRouteProp;
  navigation: CategoriesScreenNavigationProp;
};
