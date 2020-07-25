import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return ( 
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children /*children is whatever is written between the CustomButton open and close tag, that is also a part of the props object*/} 
        </button>
     );
}
 
export default CustomButton;