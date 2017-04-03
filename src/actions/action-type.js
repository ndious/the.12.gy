
import constants from './../constants'; 

export const setDevelopmentFilter = (filter) => ({
  type: constants.SET_DEVELOPMENT_FILTER,
  filter
})

export const  categoriesListLoaded = (data) => {
  return dispatch => {
    data.each(values => 
      dispatch({
          type: constants.ADD_DEVELOPMENT,
          values
      })
    );
  }  
}