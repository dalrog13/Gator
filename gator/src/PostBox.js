import React, {useState} from 'react';
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import db from './firebase';



function PostBox() {
    const [gatorMessage, setGatorMessage] = useState('');
    const [gatorImage, setGatorImage] = useState('');

    const sendGator = e => {
        e.preventDefault();
        db.collection('posts').add({
           displayName: 'Dallas Rogers',
           text: gatorMessage,
           image: gatorImage,
           avatar: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
        });
        setGatorMessage("")
        setGatorImage("")
    };

    return(
        <div className="postBorder">
        <div classname="postBox">
            <form>
                <div className="postBox__input">
                    <Avatar src="https://homepages.cae.wisc.edu/~ece533/images/cat.png"/>
                    <input 
                    onChange={(e) => setGatorMessage(e.target.value)}
                    value={gatorMessage} 
                    placeholder="Share some appreciation!" 
                    type="text"/>
                    
                </div>
            
                <input 
                value={gatorImage}
                onChange={(e) => setGatorImage(e.target.value)}
                className="postBox__imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text"/>
                <Button onClick={sendGator} type="submit"className="postBox__postButton">Post</Button>
            </form>
        </div>
        </div>
    );

}
export default PostBox