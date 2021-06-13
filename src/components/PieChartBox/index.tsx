import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

interface IPieChartContainerProps {
    data: {
        name: string;
        percent: number;
        color: string;
    }[];
}

const PieChartBox: React.FC<IPieChartContainerProps> = ({ data }) => (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
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
                    <PieChart>
                        <Pie data={data} dataKey="percent">
                            {data.map((item, index) => (
                                <Cell key={index} fill={item.color}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
);

export default PieChartBox;