import React from 'react';
import logo from '../../logo.svg';
import './Logo.css'

const Logo = ({width, height, onClick, pointer, text}) => {
    let classes = ['Logo']
    pointer && classes.push('pointer')

    return ( 
        <div className={classes.join(" ")}>
            <img 
                width={width} 
                height={height} 
                src={logo}
                onClick={onClick}
                alt="Shreddit Logo"
                 />

            {text ? (
                <h1 className="">
                    Shreddit
                </h1>
            ) : null}
        </div>
     );
}
 
export default Logo;