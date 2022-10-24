import Navigation from "../Navigation";

function Header(props) {

    //deconstructing the properties (props) sent from App.js to the header
    const {
        setOtherSelected,
        otherSelected,
    } = props

    return (
        <header>
            <div className='header-creds'>
                <h1>
                    Samuel Varney
                </h1>
                <p>Full Stack Web Developer</p>
            </div>
            <Navigation
                // sending the deconstructed props to the navigation bar
                setOtherSelected={setOtherSelected}
                otherSelected={otherSelected}
            ></Navigation>
        </header>
    )
}

export default Header;