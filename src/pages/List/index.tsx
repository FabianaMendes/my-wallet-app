import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../components/FinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content } from './styles';

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

            <Content>
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="09/06/2021"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;