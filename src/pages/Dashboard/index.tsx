import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import Months from '../../utils/helpers';

import happyImg from '../../assets/happy.svg';
import shyImg from '../../assets/grinning.svg';
import sadImg from '../../assets/sad.svg';
import thinkingImg from '../../assets/thinking.svg';

import { Container, Content } from './styles';


const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


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

        [...expenses, ...gains].forEach(item => {
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
    },[]);


    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount)
            }
        })
        return total;
    },[monthSelected, yearSelected]);


    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount)
            }
        })
        return total;
    },[monthSelected, yearSelected]);


    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);


    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        } else if(totalGains === 0 && totalExpenses === 0){
            return {
                title: "Oops!",
                description: "Neste mês não há registros de entradas ou saídas.",
                footerText: "Parece que você não possui nenhum registro no mês e ano selecionado.",
                icon: thinkingImg
            }
        } else if(totalBalance === 0){
            return {
                title: "Uffaa!",
                description: "Neste mês você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
                icon: shyImg
            }
        } else {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance, totalGains, totalExpenses]);


    const relationExpensesGains = useMemo(()=> {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total)*100).toFixed(0));
        const percentExpenses = Number(((totalExpenses / total)*100).toFixed(0));

        const pieChartData = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#F7931B'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#E44C4E'
            }
        ]

        return pieChartData;
    },[totalGains, totalExpenses]);


    const historyData = useMemo(() => {
        return Months.map((_, month) => {
            
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('amountEntry is invalid. amountEntry must be type number.')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try {
                        amountOutput += Number(expense.amount);
                    } catch {
                        throw new Error('amountOutput is invalid. amountOutput must be type number.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: Months[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        });
    },[yearSelected]);


    const relationRecurrentVersusEventualExpenses = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(0));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(0));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: '#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: '#E44C4e'
            }
        ]
    },[monthSelected, yearSelected]);


    const relationRecurrentVersusEventualGains = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(0));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(0));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: '#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: '#E44C4e'
            }
        ]
    },[monthSelected, yearSelected]);


    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput 
                    options={months} 
                    defaultValue={monthSelected}
                    onChange={(event) => 
                        setMonthSelected(Number(event.target.value))
                    } 
                />
                <SelectInput 
                    options={years} 
                    defaultValue={yearSelected}    
                    onChange={(event) => 
                        setYearSelected(Number(event.target.value))
                    }
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="dollar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerLabel="última movimentação em 18/07/2020 às 11h40"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerLabel="última movimentação em 18/07/2020 às 11h40"
                    icon="arrowDown"
                    color="#e44c4e"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesGains}/>

                <HistoryBox 
                    data={historyData} 
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

                <BarChartBox 
                    title="Saídas"
                    data={relationRecurrentVersusEventualExpenses}
                />
                <BarChartBox 
                    title="Entradas"
                    data={relationRecurrentVersusEventualGains}
                />

            </Content>
            
        </Container>
    );
}

export default Dashboard;