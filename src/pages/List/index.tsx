import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../components/FinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content, Filters } from './styles';

const List: React.FC = () => {

    const months = [
        {value: 6, label: 'Junho'},
        {value: 5, label: 'Maio'},
        {value: 4, label: 'Abril'}
    ];

    const years = [
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019}
    ];

    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

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