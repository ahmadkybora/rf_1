import { GetAllUser } from "../actions/type";

const initialState = {
    users: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GetAllUser:
            {
                return {
                    ...state,
                    users: action.payload
                }
            }

        default:
            return state;
    }
}