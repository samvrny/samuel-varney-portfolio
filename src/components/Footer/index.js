import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
    return(
        <footer className='flex-row'>
            <a href='https://github.com/samvrny' target='_blank'><FaGithub className='github-icon'/></a> <a href='https://www.linkedin.com/in/samuel-varney' target='_blank'><FaLinkedin className='linkedin-icon'/></a> <a href='https://stackoverflow.com/users/19078724/samvrny' target='_blank'><FaStackOverflow className='stack-icon'/></a>
        </footer>
    )
}

export default Footer;