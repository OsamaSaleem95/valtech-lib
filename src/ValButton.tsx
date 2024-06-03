import React from 'react';

export interface ValButtonProps {
    text: string;
    color: string;
    onClick: () => void;
}

const ValButton: React.FC<ValButtonProps> = ({ text, color, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ValButton;