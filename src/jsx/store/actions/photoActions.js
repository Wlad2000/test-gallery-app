/****************************************************************************
**
**
**
**
****************************************************************************/
import axios from 'axios';

export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
      dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PHOTOS_FAILURE', payload: error })
    }
  };
};
