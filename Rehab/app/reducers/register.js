const initialState = {
    username: '',
    password: '',
    email: '',
    token: '',
    error: null,

    poison: 'None',
    doseSize: '',
    doseType: 'pieces',
    noOfDoses: '',
    priceOfDose: '',
    currency: 'rupees',
    timePeriod: '',
    timeType: 'years',

    log: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USERNAME_CHANGE':
            return {
                ...state,
                username: action.text,
            }
        case 'PASSWORD_CHANGE':
            return {
                ...state,
                password: action.text,
            }
        case 'EMAIL_CHANGE':
            return {
                ...state,
                email: action.text,
            }

        case 'DOSE_SIZE':
            return {
                ...state,
                doseSize: action.text,
            }
        case 'NO_OF_DOSES':
            return {
                ...state,
                noOfDoses: action.text,
            }
        case 'PRICE_OF_DOSE':
            return {
                ...state,
                priceOfDose: action.text,
            }
        case 'TIME_PERIOD':
            return {
                ...state,
                timePeriod: action.text,
            }

        case 'POISON_CHANGE':
            return {
                ...state,
                poison: action.poison,
            }
        case 'DOSE_CHANGE':
            return {
                ...state,
                doseType: action.dose,
            }
        case 'CURRENCY_CHANGE':
            return {
                ...state,
                currency: action.currency,
            }
        case 'TIME_CHANGE':
            return {
                ...state,
                timeType: action.time,
            }
        case 'LOG':
            return {
                ...state,
                log: action.text,
            }
        case 'TOKEN_RESULT':
            return {
                ...state,
                token: action.result.token,
            }
        case 'TOKEN_ERROR':
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};  