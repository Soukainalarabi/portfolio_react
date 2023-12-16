import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import "./navigation.css"
import { useState } from 'react';
export default function Navigation() {
    const [show, setShow] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const redirection = () => {
        navigate("/")
    }
    const clickBurger = () => {
        setShow(!show);
    };
    const handleLinkClick = () => {
        setShow(true)
    }

    return (
        <>
            <header>

                <div className={show ? 'navbar_header' : 'navbar_header show_nav'} >
                    <div className='logo-title'>
                        <Navbar.Brand as={ScrollLink} to="accueil-content" onClick={redirection} smooth={true} duration={80}>
                            Soukaina Larabi
                        </Navbar.Brand>
                    </div>
                    {location.pathname === "/" ? (
                        <>
                            <ul className="navbar_links">
                                <li className="navbar_item slideInDown1"  >
                                    <ScrollLink to="profil" smooth={true} duration={80} onClick={handleLinkClick}  >
                                        Profil
                                    </ScrollLink>
                                </li>
                                <li className="navbar_item slideInDown2">

                                    <ScrollLink to="competences" smooth={true} duration={80} onClick={handleLinkClick} >
                                        Compétences
                                    </ScrollLink>
                                </li>
                                <li className="navbar_item slideInDown3">
                                    <ScrollLink to="parcours" smooth={true} duration={80} onClick={handleLinkClick} >
                                        Parcours              </ScrollLink>
                                </li>
                                <li className="navbar_item slideInDown4">
                                    <ScrollLink to="portfolio" smooth={true} duration={80} onClick={handleLinkClick} >
                                        Portfolio
                                    </ScrollLink>
                                </li>
                                <li className="navbar_item slideInDown5">
                                    <ScrollLink to="contact" smooth={true} duration={80} onClick={handleLinkClick} >
                                        Contact
                                    </ScrollLink>

                                </li>
                            </ul>
                            <button className="navbar_burger"
                                aria-label="Menu"
                                onClick={clickBurger}><span className="burger_bar"></span></button>
                        </>
                    ) : null}
                </div>
            </header>

        </>
    );
}


