import { useState } from 'react';
import Modal from '../Modal';

function Project() {
    const [projectPhotos] = useState([
        {
            picture: require('../../assets/projects/Penny1.png'),
            name: 'Penny For Your Thoughts',
            description: 'A simple blog app for sharing ideas about web development technologies',
            github:'https://github.com/samvrny/theTechBlog',
            deployed:'https://fast-island-88973.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/jsquiz.png'),
            name: 'JavaScript Quiz',
            description: 'A quiz made to test the players basic JavaScript knowledge',
            github:'https://github.com/samvrny/javascript-basics-test',
            deployed:'https://samvrny.github.io/javascript-basics-test/'
        },
        {   //be replaced by the new group project
            picture: require('../../assets/projects/homebase.png'),
            name: 'Homebase App',
            description: 'An application designed for housemates to be able to keep track of bills, chores, and other household tasks',
            github:'https://github.com/AlexCourtney18/homebase',
            deployed:'https://enigmatic-bastion-69025.herokuapp.com/'
        },
        {   //to be replaced by the password generator
            picture: require('../../assets/projects/notetaker.png'),
            name: 'Notetaker App',
            description: 'A simple express app used for recording notes',
            github:'https://github.com/samvrny/notetakerapp',
            deployed:'https://protected-mesa-86289.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather',
            description: 'This is a weather application designed to show you the current weather conditions in the city of your choice',
            github:'https://github.com/samvrny/simple-weather-app',
            deployed:'https://samvrny.github.io/simple-weather-app/'
        },
        {   
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy',
            description: 'This application was designed for a theoretical company named Run Buddy, so that new users can get to know them and sign up for their services',
            github:'https://github.com/samvrny/run-buddy',
            deployed:'https://samvrny.github.io/run-buddy/'
        }
    ])

    //sets whether the modal is open or not when a project is clicked on
    const [currentProject, setCurrentProject] = useState();
    const showModal = (image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen)
    }

    //sets the original state of the modal to false (it only renders when it is true)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* checks if isModalOpen is true, and if it is, renders the modal */}
            {isModalOpen && <Modal currentProject={currentProject} onClose={showModal}/>}
            <section className='picture-box'>
                {projectPhotos.map((image, i) => (
                    <div>
                        <h3 className='titles'>{image.name}</h3>
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