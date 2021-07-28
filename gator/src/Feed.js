import React, { useEffect, useState } from 'react';
import './Feed.css';
import PostBox from './PostBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts, setPosts] =useState([]);
    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => ( setPosts (snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return(
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <PostBox />
            
            <FlipMove>
            {posts.map(post => (
            <Post 
            key={post.text}
            displayName={post.displayName}text={post.text}
            image={post.image}
            avatar={post.avatar}

            />
            
            ))}
            </FlipMove>
            {/*post*/}
            
            


        </div>
    );

}
export default Feed