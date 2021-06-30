import React from 'react';

import { Container, Tag } from './styles';

interface IFinanceCard {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const FinanceCard: React.FC<IFinanceCard> = ({ tagColor, title, subtitle, amount }) => (
    <Container>
        <Tag color={tagColor}/>
            <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
    </Container>
);

export default FinanceCard;