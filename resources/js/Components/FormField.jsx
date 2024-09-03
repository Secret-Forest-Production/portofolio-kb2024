import React from 'react';

const FormField = ({ id, type, label, value, onChange, className = '', labelClassName = '' }) => (
    <div className={`mb-4 ${className}`}>
        <label htmlFor={id} className={`block text-gray-700 text-sm font-bold mb-2 ${labelClassName}`}>
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

export default FormField;
