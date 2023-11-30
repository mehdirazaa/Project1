import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>Karachi</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color : "white", marginRight: "2rem"}}/>
                        0001-00100-1
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color : "white", marginRight: "2rem"}}/>
                        k20-0447 / k20-0227
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Algorithm Project</h4>
                <p>We present you algorithm visualizer</p>
                <div className="social">
                    <FaFacebook
                        size={30}
                        style={{color:"white",
                        marginRight: "1rem"}}
                    />
                    <FaTwitter
                        size={30}
                        style={{color:"white",
                        marginRight: "1rem"}}
                    />
                    <FaLinkedin
                        size={30}
                        style={{color:"white",
                        marginRight: "1rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
