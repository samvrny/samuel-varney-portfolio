import { useState } from "react"
import loadWebFont from "../../utils/webfont";

function Navigation(props) {

    //sets the navigation bar options
    const [navItems] = useState([
        {
            name: 'About'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Contact'
        }
    ]);

    //deconstructing the props sent from App, into header, and now here to navigation
    const {
        otherSelected,
        setOtherSelected,
    } = props

    //setting the current navigation item to About as default
    const [currentNavItem, setCurrentNavItem] = useState(navItems[0])

    loadWebFont('Urbanist')

    return(
        <nav>
            <ul>
                {/* mapping through the navItems array to print each ones name into a list for the navbar */}
                {navItems.map((category) => (
                    <li className={`${currentNavItem.name === category.name && 'active'} pointer`} key={category.name}>
                        {/* adding a click event that sets the current category to whatever list item is clicked */}
                        <span onClick={() => {
                            setCurrentNavItem(category)
                            setOtherSelected(category.name)
                        }}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;