import { InputProps } from 'antd';

export interface IInputProps extends InputProps {
    valid: boolean;
    validationMessage: string;
}