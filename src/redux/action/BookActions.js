import axios from 'axios';

import { BOOK_SUCCESS, INIT, FAILED } from '../index';

export const AddBooks = () => async (dispatch) => {
    dispatch({
        type: INIT,
    })
    try {
        let response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json');
        dispatch({
            type: BOOK_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: FAILED,
        })
    }
};