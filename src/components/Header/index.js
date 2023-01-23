import loadWebFont from "../../utils/webfont";
import Navigation from "../Navigation";

function Header(props) {

    //deconstructing the properties (props) sent from App.js to the header
    const {
        setOtherSelected,
        otherSelected,
    } = props

    loadWebFont('Urbanist')

    return (
        <header className='flex align-center column'>
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