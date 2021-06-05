import React, { useEffect, useState } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import { VpnKey, Send } from '@material-ui/icons';
import FlipMove from 'react-flip-move';
import Message from '../components/Message/Message';


export default function Index({ user }) {
    return (<div>test index</div>)
}


/*
    const [input, setInput] = useState("")
    const [username, setUsername] = useState("")
    const [messages, setMessages] = useState([])
    useEffect
        (
            () => {
                db.collection("messages")
                    .orderBy('timestamp', 'desc')
                    .onSnapshot(
                        snapshot => {
                            setMessages(
                                snapshot.docs.map
                                    (
                                        doc =>
                                        (
                                            {
                                                id: doc.id,
                                                message: doc.data()
                                            }
                                        )
                                    )
                            )
                        }
                    )
            },
            []
        )

    const sendMesssage = (e) => {
        e.preventDefault();
        if (username)
            db.collection("messages").add({
                message: input,
                username: username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        else setUsername(prompt('please enter your username'))
        setInput("");
    //}
    // return (
    //     <div className="App ">
    //         <img src={'/imgs/logo.png'} alt='logo' width={60} height={60} />
    //         <h1>
    //             <center>
    //                 Welcome {username}
    //             </center>
    //             <VpnKey onClick={() => setUsername(prompt('please enter your username'))} />
    //         </h1>
    //         <form className='app__form'>
    //             <FormControl className="app__formControl">
    //                 <Input className="app__input" placeholder="Enter a message ..." value={input} onChange={(e) => { setInput(e.target.value) }} id="input" aria-describedby="my-helper-text" />
    //                 <IconButton className="app__iconButton" variant="contained" color="primary" type='submit' onClick={sendMesssage}>
    //                     <Send />
    //                 </IconButton>
    //             </FormControl>
    //     &copy; {new Date().getFullYear()} Copyright: <a href="https://messenger-clone-90f92.web.app/"> Achraf.com </a>
    //         </form>
    //         <FlipMove className="app__messages">
    //             {
    //                 messages.map
    //                     (
    //                         (
    //                             { id, message }
    //                         ) =>
    //                             <Message username={username} key={id} message={message} />
    //                     )
    //             }
    //         </FlipMove>
    //     </div>

    // )

    return (<div>index</div>);
//}
*/