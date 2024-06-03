import React, { ReactNode } from 'react';
import { ValButtonProps } from './ValButton';
import { ValInputProps } from './ValInput';

interface ValCardProps {
    title: string;
    content: string;
    isHidden: boolean;
    input: React.ReactElement<ValInputProps>;
    button: React.ReactElement<ValButtonProps>;
}


const ValCard: React.FC<ValCardProps> = ({ title, content, isHidden, input, button }) => {
    if (!isHidden)
        return (
            <div>
                <h1>{title}</h1>
                <h2>{content}</h2>
                {input} 
                {button}
            </div>
        );
    else return null;
};

export default ValCard;