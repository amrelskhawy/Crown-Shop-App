import React from 'react'
import './input.component.scss'

export const InputField = ({ label ,  ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input'
                {...otherProps}
            />
            {
            label && 
                <label className={`form-input-label`}>{label}
                </label>
            }
        </div>
    )
}
