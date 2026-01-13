import React, {useEffect, useState} from 'react'

import { NavList } from "../../components/ui/NavigarionList/NavList"
import { Button } from "../../components/ui/Button/Button"
import type {SectionId} from "../../components/ui/NavigarionList/NavList.types.ts";

import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {useWindowSize} from "../../hooks/useWindowSize.tsx";

interface HeaderProps {
    onNavigate: (section: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const width = useWindowSize();
    const mobileNav = width < 768;

    useEffect(() => {
        if (!mobileNav) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsOpen(false)
        }
    }, [mobileNav])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen])

    const handleNavigate = (section: SectionId) => {
        onNavigate(section)
        setIsOpen(false)
    }


    return(
        <header className={isOpen ? 'is-open' : ''} data-aos="fade-in">
            <h1 className='title-logo'>
                <a href="#">
                    Kro<span>nix</span>
                </a>
            </h1>


            <nav className='header__nav'>
                <NavList variant='header' onNavigate={handleNavigate}/>

                <Button variant='primary'>
                    Get Started
                </Button>
            </nav>

            <button className="header__mobile--btn" onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu />
            </button>


        </header>
    )
}

export default Header