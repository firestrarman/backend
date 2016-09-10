export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USER_INFO_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default reducer;

export const getUserInfo = (id) => {
    return {
        type: GET_USER_INFO,
        userId: id
    };
};

export const userInfoApi = {
    getUserInfo: id => {
        return async dispatch => {
            let res = await fetch('http://jsonplaceholder.typicode.com/users/' + id);
            let json = await res.json();
            return json;
        }
    }
};
