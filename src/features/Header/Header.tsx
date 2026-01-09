import React from 'react'

import { NavList } from "../../components/ui/NavigarionList/NavList"
import { Button } from "../../components/ui/Button/Button"
import type {SectionId} from "../../components/ui/NavigarionList/NavList.types.ts";

import './Header.css'

interface HeaderProps {
    onNavigate: (section: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    return(
        <header>
            <h1 className='title-logo'>
                <a href="#">
                    Kro<span>nix</span>
                </a>
            </h1>

            <nav className='header__nav'>
                <NavList variant='header' onNavigate={onNavigate}/>

                <Button variant='primary'>
                    Get Started
                </Button>
            </nav>


        </header>
    )
}

export default Header