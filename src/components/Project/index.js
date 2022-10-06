import { useState } from 'react';

function Project() {
    const [photos] = useState([
        {
            picture: require('../../assets/projects/blog.png'),
            name: 'Tech Blog App'
        },
        {
            picture: require('../../assets/projects/jsquiz.png'),
            name: 'History Quiz'
        },
        {
            picture: require('../../assets/projects/homebase.png'),
            name: 'Homebase App'
        },
        {
            picture: require('../../assets/projects/notetaker.png'),
            name: 'Notetaker App'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather'
        },
        {
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy'
        }
    ])

    return(
        <section>
            {photos.map((image, i) => (
                <img
                    src={image.picture}
                    alt={image.name}
                    className='portfolio-picture'
                    key={image.name}
                />
            ))}
        </section>
    )
}

export default Project;