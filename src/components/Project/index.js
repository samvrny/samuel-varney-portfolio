import { useState } from 'react';
import Modal from '../Modal';
import loadWebFont from '../../utils/webfont';

function Project() {
    const [projectPhotos] = useState([
        {
            picture: require('../../assets/projects/sb1.png'),
            name: 'Style Buddy',
            description: 'This application was built to help someone building a project find different styles for it. The project features the ability to randomly search for different colors, fonts, and stock images one might want to use for a project. My role in developing this project was as the project lead, front-end javascript developer, and back-end consultant. The application is built with Javascript, CSS, HTML, React, Bcrypt, jwt, Apollo/GraphQL, Node, MongoDb, and Mongoose',
            github:'https://github.com/samvrny/style-buddy',
            deployed:'https://protected-chamber-44327.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/Penny1.png'),
            name: 'Penny For Your Thoughts',
            description: 'A simple blog application that allows users to share thoughts and comment on other users thoughts. My role in developing this application is as its sole author and it is built with Javascript, CSS, Bootstrap, Handlebars, Express, Node, Bcrypt, MySQL and Sequelize.',
            github:'https://github.com/samvrny/pennyforyourthoughts',
            deployed:'https://fast-island-88973.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/quotegenerator.png'),
            name: 'Random Quote Generator',
            description: 'A random quote generator that lets a user generate a random quote from a quote API with a button click. The user can also post the selected quote to Twitter with a button click. This project was developed by me as the sole author, and is built with HTML, CSS, Javascript, and a quote API from Jacinto Design.',
            github: 'https://github.com/samvrny/quotegenerator',
            deployed: 'https://samvrny.github.io/quotegenerator/'
        },
        {
            picture: require('../../assets/projects/infinityscroll.png'),
            name: 'Infinity Scroll',
            description: 'An application where a user can infinitely scroll through endless images using the Unsplash photo API. This project was developed with me as the sole author, and is built with HTML, CSS, Javascript, Unsplash API, and Loading.io.',
            github: 'https://github.com/samvrny/infinityscroll',
            deployed: 'https://samvrny.github.io/infinityscroll/'
        },
        {
            picture: require('../../assets/projects/memory-game.png'),
            name: 'Memory Cards',
            description: 'A Javascript powered game of memory flip-cards. The player choses cards in sets of 2 until all the cards are uncovered from the board. My role in developing this application is as its sole author, and it is built with HTML, CSS, and Javascript.',
            github: 'https://github.com/samvrny/memorygame',
            deployed: 'https://samvrny.github.io/memorygame/'
        },
        {   
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy',
            description: 'This application was designed for a theoretical company named Run Buddy, so that new users can get to know them and sign up for their services. I was the sole author of this application, which is built with HTML and CSS.',
            github:'https://github.com/samvrny/run-buddy',
            deployed:'https://samvrny.github.io/run-buddy/'
        },
        {  
            picture: require('../../assets/projects/generator1.png'),
            name: 'Password Generator',
            description: 'A simple password generator app. My role in this application was as its sole author, and it is built with Javascript, HTML, and CSS.',
            github:'https://github.com/samvrny/simple-password-generator',
            deployed:'https://samvrny.github.io/simple-password-generator/'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather',
            description: 'This is a weather application designed to show you the current weather conditions in the city of your choice. My role in developing this project was as its sole author, and it is built with Javascript, HTML, and CSS.',
            github:'https://github.com/samvrny/simple-weather-app',
            deployed:'https://samvrny.github.io/simple-weather-app/'
        },
        {
            picture: require('../../assets/projects/notetakerss.png'),
            name: 'Express Notetaker',
            description: 'A simple note taking application built with an express backend. I was the sole author of this application, and it is built with Javascript, HTML, CSS, Node, and Express.',
            github: 'https://github.com/samvrny/notetakerapp',
            deployed: 'https://protected-mesa-86289.herokuapp.com/notes'
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

    loadWebFont('Urbanist')

    return (
        <div>
            {/* checks if isModalOpen is true, and if it is, renders the modal */}
            {isModalOpen && <Modal currentProject={currentProject} onClose={showModal}/>}
            <section className='picture-box flex wrap justify-center align-center text-center'>
                {projectPhotos.map((image, i) => (
                    <div className='project flex column align-center justify-center'>
                        <h3 className='titles'>{image.name}</h3>
                        <img
                            src={image.picture}
                            alt={image.name}
                            className='portfolio-picture'
                            key={image.name}
                        />
                        <button className='details-button' onClick={() => showModal(image, i)}>Details</button>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Project;