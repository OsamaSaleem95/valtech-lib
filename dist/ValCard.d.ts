import React from 'react';
import { ValButtonProps } from './ValButton';
import { ValInputProps } from './ValInput';
interface ValCardProps {
    title: string;
    content: string;
    isHidden: boolean;
    input: React.ReactElement<ValInputProps>;
    button: React.ReactElement<ValButtonProps>;
}
declare const ValCard: React.FC<ValCardProps>;
export default ValCard;
