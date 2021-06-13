import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import './nav-styles.css';

const NavBar = () => {

    // const guestLinks = (
    //     <React.Fragment>
    //         <li>
    //             <LinkContainer to="/next">
    //                 {/* <Button color={COLORS.blue} className="signbtn">Sign In</Button> */}
    //             </LinkContainer>
    //         </li>
    //     </React.Fragment>
    // );

    return (
        <div>
            <nav>
                <div className="nav-container">
                    <a href="/"><h2 className="header-text">Ambrite Tech</h2></a>               
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="/">JSON Validity</a>
                        </li>
                        <li>
                            <a href="/distance-calculator">Distance Calculator</a>
                        </li>
                        <li>
                            <a href="/union">Union</a>
                        </li>
                    </ul> 
                </div>
            </nav>
        </div>
    );
};

export default NavBar;