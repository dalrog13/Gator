import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar, Button } from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeIcon from '@material-ui/icons/Grade';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GetAppIcon from '@material-ui/icons/GetApp';
import StarBorderIcon from '@material-ui/icons/StarBorder';



const Post = forwardRef(({ 
    displayName,  
    text, 
    image, 
    avatar
},  ref) => {
    return(
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>

            <div className="post__body"> 

                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                           {displayName}{" "}

                        </h3>

                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>

                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                <ChatBubbleIcon fontSize="small" />
                <StarBorderIcon fontSize="small" />
                <EmojiEmotionsIcon fontSize="small" />
                <GetAppIcon fontSize="small" />
                </div>
            </div>
        </div>
    );

})
export default Post