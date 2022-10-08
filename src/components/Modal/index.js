function Modal({ currentProject, onClose }) {

    //deconstruct the props
    const { name, description, picture, github, deployed } = currentProject

    return (
        <div className='modal-holder'>
            <div className="modalBackdrop">
                <div className="modal-container">
                    <h3 className="modal-title">{name}</h3>
                    <img className='modal-picture' src={picture} alt={name}></img>
                    <div className='github'>
                        <a href={github} target='_blank' >GitHub Repository</a>
                        <a href={deployed} target='_blank' >Deployed Application</a>
                    </div>
                    <p className='modal-description'>{description}</p>
                    <button className='modal-button' type="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;