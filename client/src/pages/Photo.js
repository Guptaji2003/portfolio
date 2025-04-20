
import React, { useState } from 'react';
// import axios from 'axios';

const Photo = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();

        // Append each file to the FormData object
        for (let i = 0; i < files.length; i++) {
            formData.append('photos', files[i]);
        }

        try {
            const response = await fetch('/api/upload/photos', formData, {
                method: 'POST',
                // credentials: 'include', // Include authentication cookies in the request
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Error uploading photos:', error);
        }
    };

    return (
        <div>
            <h2>Upload Photos</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Photo;
