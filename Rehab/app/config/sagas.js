import { takeEvery, select, call, put } from 'redux-saga/effects';
import { Base64 } from 'js-base64';
import { deviceStorage } from './storage';
// at login (fetch token)                                   {login}
// at next (sends username and password->create token)      {register1}
// at submit (send form details corresponding to each drug) {register2}
// at register (fetch token)                                {register2}
const getToken = headers => fetch('https://rehabparas.herokuapp.com/token', {
    headers: headers
});

const makeToken = (username, password, email) => fetch('https://rehabparas.herokuapp.com/sign_up', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'username': username,
        'password': password,
        'email': email,
    }),
});

const submitData = (headers, poison, doseSize, doseType, noOfDoses, priceOfDose, currency, timePeriod, timeType) => fetch('https://rehabparas.herokuapp.com/poisons', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        'name': poison,
        'dose_size': parseInt(doseSize),
        'dose_type': doseType,
        'no_of_doses': parseInt(noOfDoses),
        'price_of_doses': parseInt(priceOfDose),
        'currency': currency,
        'time_period': parseInt(timePeriod),
        'time_type': timeType,

    }),
});

const submitLog = (headers, poison, log) => fetch('https://rehabparas.herokuapp.com/stats', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        'dose_size': parseInt(log),
        'poison_name': poison,

    }),
});

function* fetchToken(action) {
    try {
        var username = yield select(state => state.register.username);
        var password = yield select(state => state.register.password);
        var headers = new Headers();
        headers.append("Authorization", "Basic " + Base64.encode(username + ":" + password));
        const response = yield call(getToken, headers);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: 'TOKEN_ERROR', error: result.error });
        } else {
            yield put({ type: 'TOKEN_RESULT', result });

            let stringResult = JSON.stringify(result)
            deviceStorage.saveItem("id_token", stringResult);
        }
    } catch (error) {
        yield put({ type: 'TOKEN_ERROR', error: error.message });
    }
};
function* createToken(action) {
    try {
        var username = yield select(state => state.register.username);
        var password = yield select(state => state.register.password);
        var email = yield select(state => state.register.email);

        const response = yield call(makeToken, username, password, email);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: 'TOKEN_ERROR', error: result.error });
        } else {
            yield put({ type: 'TOKEN_RESULT', result });

            let stringResult = JSON.stringify(result)
            deviceStorage.saveItem("id_token", stringResult);
        }
    } catch (error) {
        yield put({ type: 'TOKEN_ERROR', error: error.message });
    }
};



function* sendDetails(action) {
    var token = yield deviceStorage.loadJWT();
    var poison = yield select(state => state.register.poison);
    var doseSize = yield select(state => state.register.doseSize);
    var doseType = yield select(state => state.register.doseType);
    var noOfDoses = yield select(state => state.register.noOfDoses);
    var priceOfDose = yield select(state => state.register.priceOfDose);
    var currency = yield select(state => state.register.currency);
    var timePeriod = yield select(state => state.register.timePeriod);
    var timeType = yield select(state => state.register.timeType);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Token token=" + token);

    yield call(submitData, headers, poison, doseSize, doseType, noOfDoses, priceOfDose, currency, timePeriod, timeType);
};
function* sendLog(action) {
    var token = yield deviceStorage.loadJWT();
    var poison = yield select(state => state.register.poison);
    var log = yield select(state => state.register.log);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Token token=" + token);
    yield call(submitLog, headers, poison, log);
};

export default function* rootSaga() {
    yield takeEvery('LOGIN', fetchToken);
    yield takeEvery('NEXT', createToken);
    yield takeEvery('SUBMIT', sendDetails);
    yield takeEvery('REGISTER', fetchToken)
    yield takeEvery('SUBMIT_LOG', sendLog);
};