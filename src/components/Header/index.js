import Navigation from "../Navigation";

function Header(props) {
    
    //deconstructing the properties (props) sent from App.js to the header
    const{
        setOtherSelected,
        otherSelected,
    } = props

    return (
        <header className='flex-row'>
            <h1>
                <a href='/'>
                    Samuel Varney
                </a>
            </h1>
            <Navigation
                // sending the deconstructed props to the navigation bar
                setOtherSelected={ setOtherSelected }
                otherSelected={ otherSelected }
            ></Navigation>
        </header>
    )
}

export default Header;