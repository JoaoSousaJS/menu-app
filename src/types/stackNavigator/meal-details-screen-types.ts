import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RouteParamList';

type MealDetailscreenRouteProp = RouteProp<RootStackParamList, 'mealDetail'>;
type MealDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'mealDetail'
>;

export type MealDetailsProps = {
  route: MealDetailscreenRouteProp;
  navigation: MealDetailsScreenNavigationProp;
};
