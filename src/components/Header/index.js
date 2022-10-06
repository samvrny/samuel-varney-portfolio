import Navigation from "../Navigation";

function Header() {
    return(
        <header className='flex-row'>
            <h1>
                <a href='/'>
                    Samuel Varney
                </a>
            </h1>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;