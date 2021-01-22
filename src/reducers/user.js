import { SAVE_USER_INFO } from "actions";
const initialUserInfoState = {
    name: "",
    location: "",
};

const user = (state = initialUserInfoState, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default user;