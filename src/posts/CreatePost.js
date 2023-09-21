import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePost() {
    const [contentName, setContentName] = useState('');
    const [description, setDescription] = useState('');
    const [contentType, setContentType] = useState('PHOTO'); // Par défaut, sélectionnez PHOTO
    const [file, setFile] = useState(null);

    const handleContentNameChange = (e) => {
        setContentName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleContentTypeChange = (e) => {
        setContentType(e.target.value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handlePublish = () => {
        const formData = new FormData();
        formData.append('contentName', contentName);
        formData.append('description', description);
        formData.append('contentType', contentType);
        formData.append('file', file);

        axios.post('http://localhost:8080/api/contents', formData)
            .then((response) => {
                // Gérez la réussite de la publication ici
                console.log('Publication réussie :', response.data);
                // Réinitialisez les champs après la publication réussie
                setContentName('');
                setDescription('');
                setContentType('PHOTO');
                setFile(null);
            })
    };

    return (
        <div>
            <h2>Publier un post</h2>
            <form>
                <div>
                    <label><strong>Nom :</strong></label>
                    <input type="text" value={contentName} onChange={handleContentNameChange} />
                </div>
                <div>
                    <label><strong>Description :</strong></label>
                    <textarea value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label><strong>Type de contenu :</strong></label>
                    <select value={contentType} onChange={handleContentTypeChange}>
                        <option value="PHOTO">Photo</option>
                        <option value="VIDEO">Vidéo</option>
                    </select>
                </div>
                <div>
                    <label><strong>Télécharger une image/vidéo :</strong></label>
                    <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
                </div>
                <button type="button" onClick={handlePublish}>Publier</button>
            </form>
        </div>
    );
}