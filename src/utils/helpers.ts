export function formatCurrency(current: number): string {
    return current.toLocaleString('pt-br', {
            style: 'currency', 
            currency: 'BRL',
            minimumFractionDigits: 2
        });
}

export function formatDate(date: string): string {
    const dateFormatted = new Date(date);
    const year = dateFormatted.getFullYear();
    const month = (dateFormatted.getMonth()+1).toString().padStart(2, '0');
    const day = (dateFormatted.getDate()+1).toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
}
