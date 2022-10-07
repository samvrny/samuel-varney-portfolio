import { useState } from 'react';
import Modal from '../Modal';

function Project() {
    const [projectPhotos] = useState([
        {
            picture: require('../../assets/projects/blog.png'),
            name: 'Tech Blog App',
            description: 'Description is up in here'
        },
        {
            picture: require('../../assets/projects/jsquiz.png'),
            name: 'History Quiz',
            description: 'Description is up in here'
        },
        {
            picture: require('../../assets/projects/homebase.png'),
            name: 'Homebase App',
            description: 'Description is up in here'
        },
        {
            picture: require('../../assets/projects/notetaker.png'),
            name: 'Notetaker App',
            description: 'Description is up in here'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather',
            description: 'Description is up in here'
        },
        {
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy',
            description: 'Description is up in here'
        }
    ])

    const [currentProject, setCurrentProject] = useState();
    const showModal = (image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={showModal}/>}
            <section className='picture-box'>
                {projectPhotos.map((image, i) => (
                    <div>
                        <h3>{image.name}</h3>
                        <img
                            src={image.picture}
                            alt={image.name}
                            className='portfolio-picture'
                            key={image.name}
                            onClick={() => showModal(image, i)}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Project;