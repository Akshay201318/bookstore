import { BOOK_SUCCESS, INIT, FAILED } from '../index';

const initalState = {
    Books: [],
    isLoading: false,
    isError: false,
}


const BookReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case BOOK_SUCCESS: {
            return {
                ...state,
                Books: payload,
                isLoading: false,
                isError: false,
            };
        }
        case INIT: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case FAILED: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            };
        }
        default:
            return { ...state };
    }
}

export default BookReducer;