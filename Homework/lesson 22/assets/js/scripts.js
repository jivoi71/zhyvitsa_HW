// Argument s voprosom^-^

let askEarningsDay = (ask) => {
    return prompt(ask);
};

let salary = (amountOfDay, EarningsDay) => {

    return EarningsDay() * amountOfDay;
}

const DAY_AMOUNT = 20;

let fullsalary = salary(DAY_AMOUNT, () => {
    return askEarningsDay(`Какой у вас заработок за день?`);
});

alert(`На конец месяца ваща ЗП составит: ${fullsalary}`)
