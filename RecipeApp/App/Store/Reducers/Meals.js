import {MEALS} from '../../Data/dummy';
import {SET_FILTERS, TOGGLE_FAVORITE} from '../Actions/Meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeal: [],
};

const mealReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeal.findIndex(
        (meal) => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeal];
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeal: updatedFavMeals,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeal: state.favoriteMeal.concat(meal),
        };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      // console.log(appliedFilters);
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lectoseFree && !meal.isLactosefree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };
    default:
      return state;
  }
};

export default mealReducers;
