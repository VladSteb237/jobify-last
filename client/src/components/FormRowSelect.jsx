import React from 'react';

const FormRowSelect = (props) => {
    const { name, defaultValue = '', labelText, list, onChange } = props;
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select
                name={name}
                id={name}
                className='form-select'
                defaultValue={defaultValue}
                onChange={onChange}
            >
                {list.map((itemValue) => {
                    return (
                        <option key={itemValue} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormRowSelect;
