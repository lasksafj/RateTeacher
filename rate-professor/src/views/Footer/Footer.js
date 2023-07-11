import React from "react";
import {FaFacebook, FaInstagram, FaTwitter, FaArrowUp, FaArrowDown} from 'react-icons/fa'
import RMP from '../../assets/images/logo.png'
import './Footer.scss'

class Footer extends React.Component{
    state = {
        show: true
    }

    handleShowHide = () =>{
        console.log('can click:', this.state.show)
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        let show = this.state.show
        return(
            <div>
                <div className="footer1">
                {!show === false ?
                    <div className="button">
                        <button onClick={()=>this.handleShowHide()} className="button"><FaArrowUp/></button>
                    </div>
                    :
                    <div className="button">
                        <button onClick={()=>this.handleShowHide()} className="button"><FaArrowDown /></button>
                    </div>
                }
                </div>
                <div className="footer2">
                {!show === false ?
                    <div className="footer2-child1">
                        <div className="footer2-child1-text">
                            © 2023 Altice USA News, Inc. All Rights Reserved
                        </div>
                        <div className="footer2-child1-icon">
                            <a href="#f"><FaFacebook className="icon"/></a>
                            <a href="#i"><FaInstagram className="icon"/></a>
                            <a href="#t"><FaTwitter className="icon"/></a>
                            <a href="#h"> <img src={RMP} alt="" className="img"/></a>
                           
                        </div>
                    </div>
                    :
                    <div className="footer2-child2">
                        <div className="footer2-child2-col1">
                            <div>
                                <b>SITE</b>
                            </div>
                            <div>
                                <a href="#a" className="text">About</a>
                            </div>
                            <div>
                                <a href="#h" className="text">Help</a>
                            </div>
                            <div>
                                <a href="#sg" className="text">Site Guidelines</a>
                            </div>
                        </div>
                        <div className="footer2-child2-col2">
                            <div>
                                <b>LEGAL</b>
                            </div>
                            <div>
                                <a href="#tc" className="text">Term & Conditions</a>
                            </div>
                            <div>
                                <a href="#pp" className="text">Privacy Policy</a>
                            </div>
                            <div>
                                <a href="#ccp" className="text">Copyright Compliance Policy</a>
                            </div>
                            <div>
                                <a href="#canac" className="text">CA Notice at Collection</a>
                            </div>
                            <div>
                                <a href="#cadnssmpi" className="text">CA Do Not Sell or Share My Personal Information</a>
                            </div>
                        </div>
                        <div className="footer2-child2-col3">
                            <div>
                                <b>PARTNERS</b>
                            </div>
                            <div>
                                <a href="#o" className="text">Optimum</a>
                            </div>
                            
                        </div>
                        <div className="footer2-child2-col4">
                            <div>
                                <a href="#img"><img src={RMP} alt="" className="img"/></a>
                            </div>
                            <div>
                                <a href="#f"><FaFacebook className="icon"/></a>
                                <a href="#i"><FaInstagram className="icon"/></a>
                                <a href="#t"><FaTwitter className="icon"/></a>
                            </div>
                            <div className="footer2-child1-text">
                                © 2023 Altice USA News, Inc. All Rights Reserved
                            </div>
                            
                        </div>
                    </div>
                }
                </div>
            </ div>
        )
    }
}

export default Footer

