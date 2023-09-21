import React from 'react';
const PostCard = ({ content }) => {
    return (
        <div className="card">
            {content.contentType === 'PHOTO' && (
                <img
                    className="card-img-top"
                    src={`data:image/jpeg;base64,${content.contentData}`}
                    alt={content.contentName}
                />
            )}
            {content.contentType === 'VIDEO' && (
                <video controls>
                    <source
                        src={`data:video/mp4;base64,${content.contentData}`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className="card-body">
                <h5 className="card-title">{content.contentName}</h5>
                <p className="card-text">{content.description}</p>
            </div>
        </div>
    );
};

export default PostCard;