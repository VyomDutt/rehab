export const usernameChange = text => ({
    type: 'USERNAME_CHANGE',
    text,
});
export const passwordChange = text => ({
    type: 'PASSWORD_CHANGE',
    text,
});
export const emailChange = text => ({
    type: 'EMAIL_CHANGE',
    text,
});


export const DoseSizeChange = text => ({
    type: 'DOSE_SIZE',
    text,
});
export const NoOfDosesChange = text => ({
    type: 'NO_OF_DOSES',
    text,
});
export const PriceOfDoseChange = text => ({
    type: 'PRICE_OF_DOSE',
    text,
});
export const TimePeriodChange = text => ({
    type: 'TIME_PERIOD',
    text,
});


export const PoisonChange = poison => ({
    type: 'POISON_CHANGE',
    poison,
});
export const DoseTypeChange = dose => ({
    type: 'DOSE_CHANGE',
    dose,
});
export const CurrencyChange = currency => ({
    type: 'CURRENCY_CHANGE',
    currency,
});
export const TimeTypeChange = time => ({
    type: 'TIME_CHANGE',
    time,
});


export const login = () => ({
    type: 'LOGIN',
})
export const next = () => ({
    type: 'NEXT',
})
export const submit = () => ({
    type: 'SUBMIT',
})
export const register = () => ({
    type: 'REGISTER',
})

export const LogChange = text => ({
    type: 'LOG',
    text,
});

export const sublog = () => ({
    type: 'SUBMIT_LOG',
})