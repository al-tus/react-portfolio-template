import {NavList} from "../../components/ui/NavigarionList/NavList.tsx";
import './Footer.css'

import { IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoDribbble    } from "react-icons/io5";
import { FaPhone, FaLinkedinIn  } from "react-icons/fa6";
import type {SectionId} from "../../components/ui/NavigarionList/NavList.types.ts";
import React from "react";

interface FooterProps {
    onNavigate: (section: SectionId) => void;
}

const Footer :React.FC<FooterProps> = ({onNavigate}) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="container">
                    <div className="footer__top">
                        <div>
                            <h1 className='title-logo'>
                                <a href="#">
                                    Kro<span>nix</span>
                                </a>
                            </h1>
                            <p>
                                Kornix - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
                            </p>
                        </div>
                        <div className="footer__contact">
                            <span><IoMailOutline />info@kronix.com</span>
                            <span><FaPhone />(001) 1231 3435</span>
                            <div className="media">
                                <a href="#"><IoLogoFacebook /></a>
                                <a href='#'><IoLogoInstagram /></a>
                                <a href='#'><FaLinkedinIn /></a>
                                <a href='#'><IoLogoDribbble /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="container">
                    <div className="footer__bottom">
                        <NavList variant='footer' onNavigate={onNavigate}/>

                        <p>© 2026 al'tus - All Right Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer