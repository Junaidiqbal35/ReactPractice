import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

function SongList() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/beats/');
                setSongs(response.data.results);
            } catch (error) {
                console.error("Error fetching data: ", error);
                // Handle error appropriately in your real implementation
            }
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <h3>{song.song_title} by {song.username}</h3>
                        {/* Assume each song has a 'song_url' attribute where the audio file is accessible */}
                        <div className='player-wrapper' style={{
                            maxWidth: '640px',
                            margin: 'auto'
                        }}>
                        <ReactPlayer url='https://soundcloud.com/octobersveryown/drake-family-matters?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                        {/* Add more song details or buttons as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongList;
