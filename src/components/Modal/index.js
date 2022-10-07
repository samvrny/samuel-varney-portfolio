function Modal({ currentProject, onClose }) {

    const { name, description, picture } = currentProject

    return (
        <div className='modal-holder'>
            <div className="modalBackdrop">
                <div className="modal-container">
                    <h3 className="modal-title">{name}</h3>
                    <img className='modal-picture' src={picture} alt={name} />
                    <p className='modal-description'>{description}</p>
                    <button className='modal-button' type="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;