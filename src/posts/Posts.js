import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/contents')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des posts :', error);
            });
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.contentName}</h2>
                    <p>{post.description}</p>
                    {post.contentType === 'PHOTO' && (
                        <img src={`data:image/jpeg;base64,${post.contentData}`} alt="Photo" />
                    )}
                    {post.contentType === 'VIDEO' && (
                        <video controls>
                            <source src={`data:video/mp4;base64,${post.contentData}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ))}
        </div>
    );
}