import { NavList } from "../../components/ui/NavigarionList/NavList"
import { Button } from "../../components/ui/Button/Button"

import './Header.css'

const Header = () => {
    return(
        <header>
            <h1 className='title-logo'>
                <a href="#">
                    Kro<span>nix</span>
                </a>
            </h1>

            <nav className='header__nav'>
                <NavList variant='header'/>

                <Button variant='primary'>
                    Get Started
                </Button>
            </nav>


        </header>
    )
}

export default Header