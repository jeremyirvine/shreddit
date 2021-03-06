import React from 'react';
import './DownvoteButton.css'

const DownvoteButton = ({active, click}) => {

    let classes = [
        "DownvoteButton"
    ]

    active && classes.push("active")
    return ( 
        <div className={classes.join(" ")} onClick={click}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	        viewBox="0 0 20 20">
                <path d="M10.048084,15.833334h0.00004l5.360361-5.825782c-0.002268-0.005168-0.001046-0.002383-0.003314-0.007551H12.08381
                c-0.000668-0.000668-0.001041-0.001042-0.001709-0.001709V5H7.915434v4.99648c-0.001369,0.001369-0.002151,0.002151-0.00352,0.00352
                H4.582084L10.048084,15.833334z"/>
            </svg>

        </div>

     );
}
 
export default DownvoteButton;