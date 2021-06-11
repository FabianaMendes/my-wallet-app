import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../components/FinanceCard';
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content, Filters } from './styles';
import Months, { formatCurrency, formatDate } from '../../utils/helpers';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth()+1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' 
            ? {
                title: 'Entradas',
                lineColor: '#f7931B'
            } : {
                title: 'Saídas',
                lineColor: '#e44C4E'
            }
    },[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type]);

    const handleFrequencyClick = (frequency: string) => {
        
    }

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth()+1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        })

        const formattedData = filteredData.map(item => {
            return {
                description: item.description,
                amountFormatted: formatCurrency(item.amount),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41f0' : '#E44C4E'
            }
        })
        setData(formattedData);
    },[listData, monthSelected, yearSelected]);


    const months = useMemo(() => {
        return Months.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });
    },[]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    },[listData]);


    return(
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput 
                    options={months} 
                    defaultValue={monthSelected}
                    onChange={(event) => 
                        setMonthSelected(event.target.value)
                    } 
                />
                <SelectInput 
                    options={years} 
                    defaultValue={yearSelected}    
                    onChange={(event) => 
                        setYearSelected(event.target.value)
                    }
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                    onClick={() => handleFrequencyClick('recurrent')}
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {data.map((item, index) => ((
                    <FinanceCard
                        key={index}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                )))}
                
            </Content>
        </Container>
    );
}

export default List;