import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FaGoogle} from 'react-icons/fa'
import './MyVerticallyCenteredModal.scss'

class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                Login
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <div className="modal-main">
                    <h4 className="modal1">Login</h4>
                    <div className="modal2"><Button className="modal2-button"><FaGoogle style={{color: "blue"}}/> <span className="text">Login with Google</span></Button></div>
                    <div className="modal3">
                        <span>Or Login with Email</span>
                        </div>
                    <div className="modal4">
                        <div className="modal4-child">
                        <input type="text" placeholder="Email" className="input"></input>
                        </div>
                        <div className="modal4-child">
                        <input type="text" placeholder="Password" className="input"></input>
                        </div>
                        
                    </div>
                    <div className="modal5">
                        <a href="#fp"><span className="modal5-text">Forgot Password?</span></a>
                    </div>
                    <div className="modal6">
                        <Button variant="dark" className="modal6-button">Continue</Button>
                    </div>
                    <div className="modal7">
                        <span className="modal7-text">
                        Rate My Professors is designed for and targeted to U.S. audiences and is governed by and operated in accordance with U.S. laws.
                            </span>
                    </div>
                    <div className="modal8">
                        <span className="modal8-text">Already have an account?</span>
                        <a href="su" className="modal8-link">Sign Up</a>
                    </div>
                </div>
              
            </Modal.Body>
            {/* <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer> */}
          </Modal>
        )
    }
}

export default MyVerticallyCenteredModal