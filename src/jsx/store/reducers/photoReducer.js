/****************************************************************************
**
**
**
**
****************************************************************************/
const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return action.payload.map(photo => ({
        id: photo.id,
        desc: photo.description,
        urls: photo.urls,
        user: photo.user
      }));
    default:
      return state;
  }
};

export default photoReducer;
