import Navigation from "../Navigation";

function Header(props) {
    
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
                setOtherSelected={ setOtherSelected }
                otherSelected={ otherSelected }
            ></Navigation>
        </header>
    )
}

export default Header;