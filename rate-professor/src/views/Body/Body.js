import React from "react";
import { Row, Col,  Button } from 'react-bootstrap'
import smallBackground from '../../assets/images/d.png'
import rate from '../../assets/images/s.png'
import './Body.scss'
import cat from '../../assets/images/cat.png'
import panda from '../../assets/images/panda.png'


class Body extends React.Component {
    state = {
        show: true,
        showHelp: false
    }

    handleShowHide = () =>{
        this.setState({
            show: !this.state.show
        })
    }

    showHelpBox = () => {
        this.setState({
            showHelp: !this.state.showHelp
        })
    }
    render() {
        let show = this.state.show
        let showHelp = this.state.showHelp
        return(
            <>
                <div style={{backgroundImage: `url(${smallBackground})`,
                        backgroundSize: "cover"}} className="body1">
                    <div className="body-child1">
                        <img src={rate} alt="" className="img"/>
                    </div>

                    {!show === false ?
                        <div>
                            <div className="body-child2">
                                Enter your <b>school</b> to get started
                            </div>
                            <div className="body-child3">
                                <input type="text" placeholder="Your School" className="input"></input>
                                <div className="body-child-child">
                                    <a href="#j" className="link" onClick={()=>this.handleShowHide()} >I'd like to look up a professor by name</a>
                                </div>
                                
                            </div>
                        </div>
                        :
                        <div>
                            <div className="body-child2">
                                Find a <b>professor</b>
                            </div>
                            <div className="body-child3">
                                <input type="text" placeholder="Professor name" className="input"></input>
                                <div className="body-child-child">
                                    <a href="#j" className="link" onClick={()=>this.handleShowHide()} >I want to find a professor at a school</a>
                                </div>
                                
                            </div>
                        </div>
                    }
                    
                    <div className="body-child4">

                        </div>
                </div>
                <div className="body-text1">
                    Join the RMP Family
                </div>
                <div className="body-text2">
                Love RMP? Let's make it official.
                </div>
                <div className="body3">
                    <div className="body2-child1">
                        <img src={cat} alt="" className="pic"/>
                        <div className="pic-text">
                            Manage and edit your ratings
                        </div>
                    </div>
                    <div className="body2-child2">
                        <img src={panda} alt="" className="pic"/>
                        <div className="pic-text">
                            Your ratings are always anonymous
                        </div>
                    </div>
                </div>
                <div className="body4">
                    <Button className="signup">Sign Up Now!</Button>
                </div>
                {showHelp === false ? 
                    <button className='help' onClick={()=>this.showHelpBox()}><span>Help?</span></button>
                    :
                    <button className='help' onClick={()=>this.showHelpBox()}><span>Close</span></button>
                }
                {showHelp === false ? 
                    <></>
                    :
                    <>
                        <div className="frame">
                            <div className="frame-header">
                                <p className="header-title">Instant Answer</p>
                            </div>
                            <div className="frame-body">
                                <div className="frame-body-child">
                                    <p className="title">As a Proressor, what can I do about negative reviews on my profile?</p>
                                    <p className="content">You can always flag a review! If you are concered that a comment violates our site guidlines, please report the rating by selecting the flag icon at the bottom right corner of the comment.</p>
                                </div>
                                <div className="frame-body-child">
                                    <p className="title">As a Proressor, what can I do about negative reviews on my profile?</p>
                                    <p className="content">You can always flag a review! If you are concered that a comment violates our site guidlines, please report the rating by selecting the flag icon at the bottom right corner of the comment.</p>
                                </div>
                                <div className="frame-body-child">
                                    <p className="title">As a Proressor, what can I do about negative reviews on my profile?</p>
                                    <p className="content">You can always flag a review! If you are concered that a comment violates our site guidlines, please report the rating by selecting the flag icon at the bottom right corner of the comment.</p>
                                </div>
                                <div className="frame-body-child">
                                    <p className="title">As a Proressor, what can I do about negative reviews on my profile?</p>
                                    <p className="content">You can always flag a review! If you are concered that a comment violates our site guidlines, please report the rating by selecting the flag icon at the bottom right corner of the comment.</p>
                                </div>
                            </div>
                            <input type="text" placeholder="What can we help you with?" className="chatbox"></input>
                                
                        </div>
                        
                    </>

                }

                
            </>
        )
    }
}

export default Body