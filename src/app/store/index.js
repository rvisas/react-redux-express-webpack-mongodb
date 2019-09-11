import { createStore } from 'redux';
import { defaultState } from '../../server/defaultServer'

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    }
)