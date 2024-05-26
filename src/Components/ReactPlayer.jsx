// import React from 'react';
// import ReactPlayer from 'react-player';
//
// export default function MusicPlayer() {
//     return (
//         <div className='player-wrapper'>
//             <ReactPlayer
//                 url={url}
//                 className='react-player'
//                 playing={true}
//                 controls={true}
//                 volume={0.8}
//                 width='100%'
//                 height='100%'
//             />
//             {/* Additional functionality can be added here */}
//         </div>
//     );
// }

import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function MusicPlayer({ url }) {
    const [playing, setPlaying] = useState(false);

    // You might also consider managing volume at this individual player level if you'd like.
    // const [volume, setVolume] = useState(0.8);

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                url={url}
                className='react-player'
                playing={playing}
                controls={true}
                // volume={volume}
                width='100%'
                height='100%'
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
            />
            {/* Here we remove play/pause button & volume slider to give full control to the built-in ReactPlayer controls */}
        </div>
    );
}

