import axiosApi from "../../AxiosApi"
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import './Add.css'

function Add(props) {
    const dispatch = useDispatch();
    const title = useSelector(state => state.title);
    const message = useSelector(state => state.message);
    const setTitle = (value) => dispatch({type: 'SET TITLE', payload: value});
    const setMessage = (value) => dispatch({type: 'SET MESSAGE', payload: value});

    const changeTitleValue = (value) => {
        setTitle(value);
    };

    const changeMessageValue = (value) => {
        setMessage(value);
    };

    const send = async event => {
        event.preventDefault()

        const sendingMessage = {
            title: title,
            date: moment().format("DD.MM.YYYY HH:SS"),
            message: message,
        };

        try {
            await axiosApi.post('/messages.json', sendingMessage);
        } finally {
            props.history.push('/');
        }
    };

    return (
        <div className="addPost">
            <form onSubmit={send}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => changeTitleValue(e.target.value)} value={title} className="inputs input-title" name="title" placeholder="Title"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e) => changeMessageValue(e.target.value)} value={message} className="inputs input-message" name="message" placeholder="Message"/>
                <button className="btn-read">Send</button>
            </form>
        </div>
    );
}

export default Add;