import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: null,
    inProgress: false,
    error: '',
    totalData: 0
}

const musicReducerSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getMusicList(state) {
            return {
                ...state,
                inProgress: true,
                error: ''
            }
        },
        getMusicListSuccess(state, {payload}) {
            return {
                ...state,
                data: payload.results,
                inProgress: false,
                error: ''
            }
        },
        getMusicListFailure(state, {payload}) {
            return {
                ...state,
                inProgress: false,
                error: payload
            }
        }
    }
})

export const {
    getMusicList,
    getMusicListSuccess,
    getMusicListFailure,
} = musicReducerSlice.actions

export default musicReducerSlice.reducer