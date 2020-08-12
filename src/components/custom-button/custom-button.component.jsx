import React from 'react'

import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => {
    return ( 
        <CustomButtonContainer {...props} >
            {children /*children is whatever is written between the CustomButton open and close tag, that is also a part of the props object*/} 
        </CustomButtonContainer>
     );
}
 
export default CustomButton;