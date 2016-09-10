export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

const reducer = (state = [], action) => {
    switch(action.type) {
        case GET_USER_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default reducer;

export const getUser = () => {
    return {
        type: GET_USER
    };
};

export const userApi = {
    getUser: async (dispatch) => {
        let res = await fetch('http://jsonplaceholder.typicode.com/users/');
        let json = await res.json();
        return json;
    }
};
