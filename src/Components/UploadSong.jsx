import React, { useState } from 'react';
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";

const UploadMusicForm = () => {
    const [formData, setFormData] = useState({
        song_title: '',
        genre: '',
        tags: [],
        description: '',
        store_link: '',
        photo_main: null,
        audio_file: null,
    });
    // Replace these sample genres with your actual genre options
    const genres = ["Hip-Hop", "EDM", "Jazz", "Rock", "Pop"];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0]
        });
    };

    const handleTagChange = (tags) => {
        setFormData({
            ...formData,
            tags
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitFormData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submitFormData.append(key, value);
        });

        axios.post('/api/upload-music/', submitFormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(response => {
                console.log(response.data);
                // Handle successful upload
            })
            .catch(error => {
                console.error('Error uploading music:', error);
                // Handle upload error
            });
    };

    // Customize your form styles using a CSS-in-JS solution like styled-components
    // or a CSS framework like Tailwind CSS, Bootstrap etc. for modern design.

    return (
        <div className="upload-music-form">
            <h2>Upload Your Music</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="song_title"
                    value={formData.song_title}
                    onChange={handleInputChange}
                    placeholder="Song Title"
                    required
                />

                {/* Include more fields as necessary */}

                {/* Genre and Tags would typically be dropdowns or a tag input component */}

                <ReactTagInput
                    tags={formData.tags}
                    onChange={(newTags) => setFormData({ ...formData, tags: newTags })}
                    placeholder="Type and press enter"
                />

                

                <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    required>
                    <option value="">Select Genre</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>

                {/* For tags, you might want a custom component or library to handle tag input */}
                {/* <TagsInput value={formData.tags} onChange={handleTagChange} /> */}

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                />

                <input
                    type="text"
                    name="store_link"
                    value={formData.store_link}
                    onChange={handleInputChange}
                    placeholder="Store Link"
                />

                <input
                    type="file"
                    name="photo_main"
                    onChange={handleFileChange}
                    required
                />

                <input
                    type="file"
                    name="audio_file"
                    onChange={handleFileChange}
                    required
                />

                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadMusicForm;
