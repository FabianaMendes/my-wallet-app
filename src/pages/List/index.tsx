import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const List: React.FC = () => {

    const options = [
        {value: 'Fernando', label: 'Fernando'},
        {value: 'Carla', label: 'Carla'},
        {value: 'Luciano', label: 'Luciano'}
    ];

    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;