import { Meal } from '../../models/meal/meal';

export interface IStateMeals {
  meals: {
    filteredMeals: Meal[];
    meals: Meal[];
    favoriteMeals: [];
  };
}
