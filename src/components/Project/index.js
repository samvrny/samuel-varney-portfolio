import { useState } from 'react';
import Modal from '../Modal';

function Project() {
    const [projectPhotos] = useState([
        {
            picture: require('../../assets/projects/blog.png'),
            name: 'Tech Blog App',
            description: 'Description is up in here',
            github:'https://github.com/samvrny/theTechBlog',
            deployed:'https://fast-island-88973.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/jsquiz.png'),
            name: 'History Quiz',
            description: 'Description is up in here',
            github:'https://github.com/samvrny/javascript-basics-test',
            deployed:'https://samvrny.github.io/javascript-basics-test/'
        },
        {
            picture: require('../../assets/projects/homebase.png'),
            name: 'Homebase App',
            description: 'Description is up in here',
            github:'https://github.com/AlexCourtney18/homebase',
            deployed:'https://enigmatic-bastion-69025.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/notetaker.png'),
            name: 'Notetaker App',
            description: 'Description is up in here',
            github:'https://github.com/samvrny/notetakerapp',
            deployed:'https://protected-mesa-86289.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather',
            description: 'Description is up in here',
            github:'https://github.com/samvrny/simple-weather-app',
            deployed:'https://samvrny.github.io/simple-weather-app/'
        },
        {
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy',
            description: 'Description is up in here',
            github:'https://www.google.com/',
            deployed:'https://www.google.com/'
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