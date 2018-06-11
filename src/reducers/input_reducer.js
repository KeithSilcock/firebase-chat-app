import types from '../actions/types';

const DEFAULT_STATE = {
    message: '',
};


export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.UPDATE_INPUT:
            const {name, value} = action.payload;
            return {...state, [name]:value};

        default:
            return state;
    }
}