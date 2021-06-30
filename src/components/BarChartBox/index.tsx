import React from 'react';

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip }  from 'recharts';
import { formatCurrency } from '../../utils/helpers';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
    return(
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>
                    {data.map((indicator, index) => (
                        <Legend key={index} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))}
                </LegendContainer>

            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    cursor="pointer"
                                    fill={indicator.color}
                                />
                            ))}
                        </Bar>
                        <Tooltip 
                            formatter={(value:number) => formatCurrency(value)} 
                            cursor={{ fill:'none' }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

export default BarChartBox;