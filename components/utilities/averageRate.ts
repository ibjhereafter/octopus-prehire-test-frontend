type Rates = number [];

export const averageRate = (rates: Rates) => {

    const sum = rates?.reduce((previous: number, current: number): number => {
        return Number(previous) + Number(current);
    }, 0)

    return Number(sum / Number(rates?.length));
}