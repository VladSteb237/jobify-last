import React from 'react';

const FormRow = (props) => {
    const { name, type, labelText, defaultValue, onChange } = props;
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                className='form-input'
                defaultValue={defaultValue}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default FormRow;
