import React from 'react';

import './NavBar.css'

import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';


const NavBar = ({onLogoClick, user}) => {
    return ( 
        <div className="NavBar">
            <div className="row ml-1" style={{width: "100%"}}>
                <div className="">
                    <Logo 
                        width={50} 
                        pointer 
                        text
                        onClick={onLogoClick} />
                </div>
                <div className="ml-auto mr-auto" style={{textAlign: 'center'}}>
                    {/* <h2>hi</h2> */}
                </div>
                <div className="ml-auto mr-2">
                    <UserMenu user={user} />
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;