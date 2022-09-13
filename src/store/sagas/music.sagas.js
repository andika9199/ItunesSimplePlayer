import {call, put, takeLatest} from 'redux-saga/effects'
import {
    getMusicList,
    getMusicListSuccess,
    getMusicListFailure
} from '../reducers/music.reducer'
import { searchMusic } from '../../libs/search.api'

export function* getMusicListSaga({payload}) {
    try {
        const result = yield call(searchMusic, payload)
        yield put(getMusicListSuccess(result))
    } catch (e) {
        yield put(getMusicListFailure(e))
    }
}

export function* watchGetMusicSaga() {
    yield takeLatest(getMusicList.toString(), getMusicListSaga)
}

export default [watchGetMusicSaga]