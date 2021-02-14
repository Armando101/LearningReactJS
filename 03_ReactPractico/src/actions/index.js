// type: para indicar la acción que se va a ejecutar.
// payload: es la información que estamos mandando al reducer.

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});
