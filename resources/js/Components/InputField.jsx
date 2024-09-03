import React from 'react';

const InputField = ({ id, type, value, onChange }) => (
    <input
        type={type}
        id={id}
        name={id}
        className="shadow-custom-shadow2 border-none rounded-lg w-full py-2 px-3 text-gray"
        value={value}
        onChange={onChange}
        required
    />
);

export default InputField;
