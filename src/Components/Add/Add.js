import {useState} from "react";
import './Add.css'
import {useDispatch} from "react-redux";
import {send} from "../../store/action";
import moment from "moment";

function Add({history}) {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const changeTitleValue = (value) => {
        setTitle(value);
    };

    const changeMessageValue = (value) => {
        setMessage(value);
    };

    const sendingMessage = {
        title: title,
        date: moment().format("DD.MM.YYYY HH:SS"),
        message: message,
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(send(sendingMessage));
        history.push('/');
    };

    return (
        <div className="addPost">
            <form onSubmit={(e) => submit(e)}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => changeTitleValue(e.target.value)} value={title} className="inputs input-title"
                       name="title" placeholder="Title"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e) => changeMessageValue(e.target.value)} value={message}
                          className="inputs input-message" name="message" placeholder="Message"/>
                <button className="btn-read">Send</button>
            </form>
        </div>
    );
}

export default Add;