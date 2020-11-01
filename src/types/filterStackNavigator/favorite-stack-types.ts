import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FilterStackParamList } from './RouteParamList';

type FilterScreenRouteProp = RouteProp<FilterStackParamList, 'filter'>;
type FilterScreenNavigationProp = StackNavigationProp<
  FilterStackParamList,
  'filter'
>;

export type FilterProps = {
  route: FilterScreenRouteProp;
  navigation: FilterScreenNavigationProp;
};
