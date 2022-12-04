import React from 'react'
import './button-component.scss'

const BUTTON_TYPE_CLASSES = {
    'google' : 'google-sign-in',
    'inverted' : 'inverted',
}

export const Button = ({children , button_type , ...otherProps}) => {
    return <button 
        className={`button-container ${button_type ? BUTTON_TYPE_CLASSES[button_type] : ''}`} 
        {...otherProps}
        >
            {children}
    </button>
}
