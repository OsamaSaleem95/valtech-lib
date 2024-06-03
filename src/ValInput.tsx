import React from 'react';

export interface ValInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const ValInput: React.FC<ValInputProps> = ({ value, onChange, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default ValInput;