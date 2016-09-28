export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USER_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default reducer;

export const getUser = (data) => {
    return {
        type: GET_USER,
        post: data
    };
};

export const userApi = {
    getUser: async (data) => {
        let res = await fetch('http://localhost:3000/authuser/login.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        let json = await res.json();
        return json;
    }
};
