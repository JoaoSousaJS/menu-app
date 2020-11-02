export interface IAction {
  type: string;
  mealId: string;
  filters: {
    glutenFree: boolean;
    lactoseFree: boolean;
    vegetarian: boolean;
    vegan: boolean;
  };
}
