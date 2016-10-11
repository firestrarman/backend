export const GET_PREVIEW = 'GET_PREVIEW';
export const GET_PREVIEW_SUCCESS = 'GET_PREVIEW_SUCCESS';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case GET_PREVIEW_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default reducer;

export const gePreview = (data) => {
    return {
        type: GET_PREVIEW,
        post: data
    };
};

export const previewApi = {
    getUser: async (data) => {
        let res = await fetch('http://localhost:3000/level/preview.json', {
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
