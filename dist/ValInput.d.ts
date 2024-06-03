import React from 'react';
export interface ValInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
declare const ValInput: React.FC<ValInputProps>;
export default ValInput;
