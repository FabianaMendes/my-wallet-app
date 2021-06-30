import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[];
    defaultValue?: string | number;
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, defaultValue, onChange }) => (
    <Container>
        <select onChange={onChange} defaultValue={defaultValue}>
            { options.map(option => (
                <option 
                key={option.value}
                value={option.value}
                >
                    {option.label}
                </option>
            ))
            }
        </select>
    </Container>
);


export default SelectInput;