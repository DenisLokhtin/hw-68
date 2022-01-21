import axiosApi from "../AxiosApi";

export const SET_POSTS = 'SET POSTS';

export const setPosts = (payload) => ({type: SET_POSTS, payload});

export const deleteMessage = (id) => {
    return async (dispatch) => {
        try {
            await axiosApi.delete('/messages/' + id + '.json');
            dispatch(getMessages())
        } catch (e) {
            console.log(e);
        }
    }
};

export const getMessages = () => {
    return async (dispatch) => {
        try {
            await axiosApi.get('/messages.json').then(response => {
                if (response.data !== null) {
                    const arrayPosts = Object.entries(response.data);
                    const array = [];
                    for (const [key, value] of arrayPosts) {
                        array.push({...value, id: key})
                    }
                    dispatch(setPosts(array));
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
};

export const send = (sendingMessage) => {
    return async (dispatch) => {
        try {
            await axiosApi.post('/messages.json', sendingMessage);
            dispatch(getMessages());
        } catch (e) {
            console.log(e);
        }
    }
};