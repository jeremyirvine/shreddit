import React from 'react';

import './UserMenu.css'

const UserMenu = ({user}) => {
    return ( 
        <div className="UserMenu">
            <img src={user.img} />
            <p>{user.name}</p>
        </div>
     );
}
 
export default UserMenu;