import React from "react";
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
// import {Nav.Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import './Nav1.scss'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal.js'



class Nav1 extends React.Component {
    state = {
        modalShow: false
    }

    setModalShow = (check) => {
        this.setState({
            modalShow: check
        })
    }
    render() {
        let modalShow = this.state.modalShow
        return(
            
            <>
                <Navbar bg="transparent" data-bs-theme="dark" collapseOnSelect expand="lg">
                    <Container>
                    <Nav>
                        <Nav.Link href="#"><FaFacebook className="icon fa" /></Nav.Link>
                        <Nav.Link href="#"><FaInstagram className="icon ins"/></Nav.Link>
                        <Nav.Link href="#"><FaTwitter className="icon tw"/></Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="transparent" className="login" onClick={()=>this.setModalShow(true)}>LogIn</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => this.setModalShow(false)}
                            />
                            <Button variant="dark" className="signup" >SignUp</Button>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                
            </>
        )
    }
}

export default Nav1