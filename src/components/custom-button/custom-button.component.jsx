import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return ( 
        <button className={`${inverted ? 'inverted' : ''} bala ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children /*children is whatever is written between the CustomButton open and close tag, that is also a part of the props object*/} 
        </button>
     );
}
 
export default CustomButton;