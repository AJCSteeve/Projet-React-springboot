import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from "./PostCard";

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
        <div className="row">
            {posts.map((post) => (
                <div key={post.id} className="col-md-4 mb-4">
                    <PostCard content={post} />
                </div>
            ))}
        </div>
    );
}