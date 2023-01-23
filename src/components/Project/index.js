import { useState } from 'react';
import Modal from '../Modal';
import loadWebFont from '../../utils/webfont';

function Project() {
    const [projectPhotos] = useState([
        {
            picture: require('../../assets/projects/sb1.png'),
            name: 'Style Buddy',
            description: 'This application was built to help someone building a project find different styles for it. The project features the ability to randomly search for different colors, fonts, and stock images one might want to use for a project. My role in developing this project was as the project lead, front-end javascript developer, and back-end consultant. The application was build using Javascript, CSS, HTML, React, Bcrypt, jwt, Apollo/GraphQL, Node, MongoDb, and Mongoose',
            github:'https://github.com/samvrny/style-buddy',
            deployed:'https://protected-chamber-44327.herokuapp.com/'
        },
        {
            picture: require('../../assets/projects/Penny1.png'),
            name: 'Penny For Your Thoughts',
            description: 'A simple blog application that allows users to share thoughts and comment on other users thoughts. My role in developing this application is as its sole author and it was built using Javascript, CSS, Bootstrap, Handlebars, Express, Node, Bcrypt, MySQL and Sequelize.',
            github:'https://github.com/samvrny/pennyforyourthoughts',
            deployed:'https://fast-island-88973.herokuapp.com/'
        },
        // {
        //     picture: require(),
        //     name: 'Memory Cards',
        //     description: 'A Javascript powered game of memory flip-cards. The player choses cards in sets of 2 until all the cards are uncovered from the board. My role in developing this application is as its sole author, and it was build using HTML, CSS, and Javascript.',
        //     github: '',
        //     deployed: ''
        // },
        {   
            picture: require('../../assets/projects/runbuddy.png'),
            name: 'Run Buddy',
            description: 'This application was designed for a theoretical company named Run Buddy, so that new users can get to know them and sign up for their services. I was the dol author of this application, which was built using HTML and CSS.',
            github:'https://github.com/samvrny/run-buddy',
            deployed:'https://samvrny.github.io/run-buddy/'
        },
        {  
            picture: require('../../assets/projects/generator1.png'),
            name: 'Password Generator',
            description: 'A simple password generator app. My role in this application was as its sole author, and it was built using Javascript, HTML, and CSS.',
            github:'https://github.com/samvrny/simple-password-generator',
            deployed:'https://samvrny.github.io/simple-password-generator/'
        },
        {
            picture: require('../../assets/projects/weatherapp.png'),
            name: 'Local Weather',
            description: 'This is a weather application designed to show you the current weather conditions in the city of your choice. My role in developing this project was as its sole author, and it was built with Javascript, HTML, and CSS.',
            github:'https://github.com/samvrny/simple-weather-app',
            deployed:'https://samvrny.github.io/simple-weather-app/'
        },
        {
            picture: require('../../assets/projects/notetakerss.png'),
            name: 'Express Notetaker',
            description: 'A simple note taking application built with an express backend. I was the sole author of this application, and it was build with Javascript, HTML, CSS, Node, and Express.',
            github: 'https://github.com/samvrny/notetakerapp',
            deployed: 'https://protected-mesa-86289.herokuapp.com/notes'
        },
        { 
            picture: require('../../assets/projects/homebase.png'),
            name: 'Homebase App',
            description: 'An application designed for housemates to be able to keep track of bills, chores, and other household tasks. My role in this project was as the back-end developer and assistance with front-end Javascript. This application was built using Javascript, MySQL, Sequelize, Node, Express, Bootstrap, Handlebars, and CSS.',
            github:'https://github.com/AlexCourtney18/homebase',
            deployed:'https://enigmatic-bastion-69025.herokuapp.com/'
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