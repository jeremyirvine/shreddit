import React from 'react';

import './UserMenu.css'

const UserMenu = ({user, click}) => {
    return ( 
        <div className="UserMenu" onClick={() => click(user.id)}>
            <img src={user.img} />
            <p>{user.name}</p>
        </div>
     );
}
 
export default UserMenu;