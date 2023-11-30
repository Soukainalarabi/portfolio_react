import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
export default function Navigation() {
    const navigate = useNavigate()
    const redirection = () => {
        navigate("/")
    }
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand as={ScrollLink} to="accueil-content" onClick={redirection} smooth={true} duration={80}>
                            Soukaina Larabi
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={ScrollLink} to="accueil-content" onClick={redirection} smooth={true} duration={80}>
                                    Accueil
                                </Nav.Link>

                                <Nav.Link as={ScrollLink} to="profil" onClick={redirection} smooth={true} duration={80}>
                                    Profil              </Nav.Link>
                                <Nav.Link as={ScrollLink} to="competences" onClick={redirection} smooth={true} duration={80}>
                                    Compétences              </Nav.Link>
                                <Nav.Link as={ScrollLink} to="parcours" onClick={redirection} smooth={true} duration={80}>
                                    Parcours              </Nav.Link>


                                <Nav.Link as={ScrollLink} to="portfolio" onClick={redirection} smooth={true} duration={80}>
                                    Portfolio              </Nav.Link>
                                <Nav.Link as={ScrollLink} to="contact" onClick={redirection} smooth={true} duration={80}>
                                    Contact              </Nav.Link>




                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>


        </>
    )
}



