import React from 'react';
export interface ValButtonProps {
    text: string;
    color: string;
    onClick: () => void;
}
declare const ValButton: React.FC<ValButtonProps>;
export default ValButton;
