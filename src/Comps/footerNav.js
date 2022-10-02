import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons'

function FooterNav() {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row ">
                    <div className="row justify-content-center">
                        <div className="col-auto pt-2">
                            <p className="logo-footer-text mb-0">ShoeHolickss</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto pt-2">
                            <p>
                            <FontAwesomeIcon icon={faTwitter} size='xl' color="white" className="mx-4 "></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faLinkedin} size='xl' color="white" className="mx-4 "></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram} size='xl' color="white" className="mx-4 "></FontAwesomeIcon>
                            </p>    
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto pt-2">
                            <p className="footer-cr mt-0">
                            © 2022 All rights reserved Shoeholicks Pvt Ltd 
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterNav;