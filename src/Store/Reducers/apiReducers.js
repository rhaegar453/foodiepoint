import * as actions from "./../ActionTypes/API";

const initialState = {
  success: false,
  loading: false,
  error: false,
  errMessage: "",
  recipes: [],
  favorites: []
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_API_STARTED:
      return {
        ...state,
        loading: false
      };
    case actions.REQUEST_API_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errMessage: action.payload
      };
    case actions.REQUEST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        recipes: action.payload
      };
    case actions.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        recipes:state.recipes.filter(item=>item.title!=action.payload.title)
      };
    
    case actions.REMOVE_FROM_FAVORITES:
      return{
          ...state,
          favorites:state.favorites.filter(data=>data!=action.payload)
      }
    default:
      return state;
  }
};

export default apiReducer;