import {takeEvery, call, put} from "redux-saga/effects";
import {usersAPI} from "@footballer/api";
import {
    getCountriesSuccess,
    getCountriesFetch,
    getCountriesFail,
    getCountriesFinally
} from "./toolkitSlice";

const api = usersAPI(`https://v3.football.api-sports.io`, `e7bec7696d392143d9e3d5704ae27301`);

export function* RootSaga() {
    yield takeEvery(getCountriesFetch.type, workGetCountriesFetch, api)

};

function* workGetCountriesFetch(api: any): any {
    try {
        const countries = yield call(api.getMatches);
        yield put(getCountriesSuccess(countries.data.response));
    } catch (error) {
        yield put(getCountriesFail());
    } finally {
        yield put(getCountriesFinally());
    }
}